import Express, { Request, Response } from 'express'
import { Profile, User } from '../models'
import { check, validationResult } from 'express-validator'
import { Auth } from '../middleware'
import { ExperienceType, EducationType } from '../types'
import { Types } from 'mongoose'

const router = Express.Router()

// router.get('/', (req: Request, res: Response) => {
//   res.send({ message: 'hello world' })
// })

// @route   GET api/profile
// @desc    Get current user profile
// @access  Private
router.get('/', Auth, async (req: Request, res: Response) => {
  try {
    const profile = await Profile.findOne({
      user: req.body.user.id,
    }).populate('user', ['name', 'avatar'])
    if (!profile) {
      return res.status(404).json({ msg: 'There is no profile for this user' })
    }
    return res.json(profile)
  } catch (err) {
    return res.status(500).send(err.message)
  }
})

// @route   POST api/profile
// @desc    Create or edit user profile
// @access  Private
router.post(
  '/',
  [
    Auth,
    check('status', 'status is required')
      .not()
      .isEmpty(),
    check('skills', 'Skills is required')
      .not()
      .isEmpty(),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const {
      company,
      website,
      location,
      bio,
      status,
      githubusername,
      youtube,
      twitter,
      facebook,
      linkedin,
      instagram,
      skills,
      profileImg,
      user,
    } = req.body

    // Get fields
    const profileFields = {
      user: req.body.user.id,
      company: company || undefined,
      website: website || undefined,
      location: location || undefined,
      bio: bio || undefined,
      status: status || undefined,
      githubusername: githubusername || undefined,
      profileImg: profileImg || undefined,
      skills: skills || undefined,
      social: {
        youtube: youtube || undefined,
        twitter: twitter || undefined,
        facebook: facebook || undefined,
        linkedin: linkedin || undefined,
        instagram: instagram || undefined,
      },
    }

    try {
      let profile = await Profile.findOne({ user: user.id })

      if (profile) {
        profile = await Profile.findOneAndUpdate(
          {
            user: user.id,
          },
          { $set: profileFields },
          { new: true }
        )
        return res.json(profile)
      }
      profile = new Profile(profileFields)
      await profile.save()
      return res.json(profile)
    } catch (err) {
      return res.status(500).send(err)
    }
  }
)

// @route   POST api/profile/experience
// @desc    Add experience to profile
// @access  Private
router.put(
  '/experience',
  [
    Auth,
    check('title', 'Title is required')
      .not()
      .isEmpty(),
    check('company', 'Company is required')
      .not()
      .isEmpty(),
    check('from', 'From date is required')
      .not()
      .isEmpty(),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const {
      title,
      data,
      company,
      from,
      isPresent,
      to,
      location,
      description,
      user,
    } = req.body

    const newExp: ExperienceType = {
      title,
      data,
      company,
      from,
      isPresent,
      to,
      location,
      description,
    }

    try {
      const profile = await Profile.findOne({ user: user.id })
      profile.experience.unshift((newExp as unknown) as Types.ObjectId)

      await profile.save()
      return res.json(profile)
    } catch (err) {
      return res.status(500).send(err)
    }
  }
)

// @route   PUT api/profile/education
// @desc    Add education to profile
// @access  Private
router.put(
  '/education',
  [
    Auth,
    check('school', 'School is required')
      .not()
      .isEmpty(),
    check('title', 'Title is required')
      .not()
      .isEmpty(),
    check('from', 'From date is required')
      .not()
      .isEmpty(),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const {
      title,
      project,
      school,
      from,
      isPresent,
      to,
      location,
      user,
    } = req.body

    const newEdu: EducationType = {
      title,
      project,
      school,
      from,
      isPresent,
      to,
      location,
    }

    try {
      const profile = await Profile.findOne({ user: user.id })
      profile.education.unshift((newEdu as unknown) as Types.ObjectId)

      await profile.save()
      return res.json(profile)
    } catch (err) {
      return res.status(err.code).send(err.message)
    }
  }
)

// @route   DELETE api/profile
// @desc    Delete user and profile
// @access  Private
router.delete('/', Auth, async (req: Request, res: Response) => {
  try {
    await Profile.findOneAndRemove({ user: req.body.user.id })
    await User.findOneAndRemove({ _id: req.body.user.id })
    res.json({ msg: 'User Deleted' })
  } catch ({ code, message }) {
    res.status(code).send(message)
  }
})

export default router
