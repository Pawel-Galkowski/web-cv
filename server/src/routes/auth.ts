import Express, { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from 'config'
import { check, validationResult } from 'express-validator'
import { UserType } from '../types'

import { Auth, Mailer, RecoveryMailer } from '../middleware'
import { User } from '../models'

const router = Express.Router()

// @route   Auth /
// @desc    GET informations about current user
// @access  Private

router.get('/', Auth, async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.body.user.id).select('-password')
    if (!user.confirmed) {
      return res.status(400).json({ msg: 'Verify your account first' })
    }
    return res.json(user)
  } catch (err) {
    return res.status(500).send(err.message)
  }
})

// @route   Auth /login
// @desc    POST Login form
// @access  Private

router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body

    try {
      const user = await User.findOne({ email })
      if (!user) {
        return res.status(400).json({ msg: 'Wrong email or password' })
      }

      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) {
        return res.status(400).json({ msg: 'Wrong email or password' })
      }

      if (user.confirmed !== true) {
        return res.status(400).json({ msg: 'Verify your account first' })
      }

      const payload = {
        id: user.id,
      }

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err
          res.json({ token })
        }
      )
      return 'Process succes'
    } catch (err) {
      return res.status(500).send(err.message)
    }
  }
)

// @route   Auth /register
// @desc    POST Register form
// @access  Private

router.post(
  '/register',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a stronger password').isLength({ min: 6 }),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const { name, email, password, role } = req.body

    try {
      let user = await User.findOne({ email })
      if (user) {
        return res.status(400).json({ errors: 'User exist' })
      }

      const secretKey = await bcrypt.hash(email, await bcrypt.genSalt(10))

      user = new User({
        name,
        email,
        password,
        confirmed: false,
        confirmationKey: false,
      })

      const resEmail = Mailer(user, secretKey)
      const finChecker: boolean = await resEmail.then((value) => value)

      user.confirmationKey = await bcrypt.hash(user.id, secretKey)
      user.password = await bcrypt.hash(password, await bcrypt.genSalt(10))

      if (finChecker === true) {
        await user.save()
        return res.redirect('/login')
      }
    } catch (err) {
      res.status(500).send(err)
    }
  }
)

// @route   Auth /login
// @desc    POST Login form
// @access  Private

//   router.post('/login', (req: Request, res: Response) => {
//     const { errors } = validateLoginImput(req.body);
//     const { email } = req.body;
//     const password = req.body.passowrd;

//     User.findOne({ email }).then((user) => {
//       if (!user) {
//         errors.email = 'User not found';
//         return res.status(404).json(errors);
//       }
//       const { confirmed } = User;
//       bcrypt.compare(password, user.passowrd).then((isMatch) => {
//         if (isMatch) {
//           if (confirmed !== true) {
//             errors.user = 'Please confirm email first';
//             return res.status(404).json(errors);
//           }
//           const payload = {
//             id: user.id,
//             name: user.name,
//             avatar: user.avatar,
//           };

//           jwt.sign(payload, keys.secretOrKey, { expiresIn: 360000 }, (err, token) => {
//             res.json({
//               sucess: true,
//               token,
//             });
//           });
//         } else {
//           errors.password = 'Password inccorect';
//           return res.status(400).json(errors);
//         }
//         return 'Process finished';
//       });
//       return 'Log in process finished';
//     });
//   });

// @route   Auth /confirmation/:token
// @desc    POST Confirmation email token
// @access  Public

router.post('/confirmation/:token', async (req: Request, res: Response) => {
  try {
    const verifyuser = await User.findOne(req.body.email)
    const secretToken = await bcrypt.hash(
      verifyuser.id,
      verifyuser.confirmationKey
    )
    const isIdentical = jwt.verify(req.params.token, secretToken)
    if (verifyuser._id === isIdentical) {
      await verifyuser.updateOne({ confirmed: true })
      await verifyuser.updateOne({ $unset: { confirmationKey: 1 } })
    } else {
      return res.status(400).json({ errors: 'Invalid Credentials' })
    }
  } catch (err) {
    return res.status(400).json(err)
  }
})

// @route   Auth /recovery
// @desc    POST recovery user account
// @access  Private

router.post('/recovery', async (req: Request, res: Response) => {
  try {
    const { email } = req.body
    const recoveryUser = await User.findOne(email)
    const secretToken = await bcrypt.hash(email, await bcrypt.genSalt(10))
    const newRecoveryToken = await bcrypt.hash(email, secretToken)
    const cleanToken = newRecoveryToken.replace(/[/]/g, '')
    if (!recoveryUser) {
      return res.status(400).json({ errors: 'Invalid Credentials' })
    }
    const finChecker = await RecoveryMailer(recoveryUser, cleanToken).then(
      (value) => value
    )
    if (finChecker) {
      await recoveryUser.updateOne({ recoveryToken: cleanToken })
    }
    return res.status(200).json({ msg: 'Mail send' })
  } catch (err) {
    return res.status(400).json({ errors: 'Invalid  Email' })
  }
})

// @route   Auth /recovery/:token
// @desc    POST Recovery account confirmation
// @access  Private

router.post('/recovery/:token', async (req: Request, res: Response) => {
  try {
    const recoveryUser = await User.findOne(req.body.email)
    if (recoveryUser.recoveryToken === req.params.token) {
      const cryptPassword = await bcrypt.hash(
        req.body.password,
        await bcrypt.genSalt(10)
      )
      await recoveryUser.updateOne({ password: cryptPassword })
      await recoveryUser.updateOne({ $unset: { recoveryToken: 1 } })
    } else {
      return res.status(400).json({ errors: 'Invalid Credentials' })
    }
  } catch (err) {
    return res.status(400).json({ errors: 'Cannot update user' })
  }
})

export default router
