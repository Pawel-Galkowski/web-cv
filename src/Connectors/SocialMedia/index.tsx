import { FC, useState, useCallback } from 'react'
import { Input } from 'antd'
import { useAppSelector, useAppDispatch } from '../hooks'
import { inputStyles } from './styles'
import { WebsiteTypes } from '../../Reducers/SocialMedia/types'

const SocialMedia: FC = () => {
  const socialInformations = useAppSelector(
    ({ socialMedia }) => socialMedia.web
  )
  const dispatch = useAppDispatch()

  const [media, setMedia] = useState<WebsiteTypes>(socialInformations)

  const onValueChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setMedia({
        ...media,
        [target.name.toLowerCase()]: target.value,
      })
      dispatch({
        type: `SET_MEDIA`,
        payload: media,
      })
    },
    [media]
  )

  return (
    <>
      <div style={inputStyles}>
        <label htmlFor='personalMail'>E-mail: </label>
        <Input
          id='personalMail'
          value={media.mail}
          name='Mail'
          onChange={onValueChange}
        />
      </div>
      <div style={inputStyles}>
        <label htmlFor='phone'>Phone: </label>
        <Input
          id='phone'
          value={media.phone}
          name='Phone'
          onChange={onValueChange}
        />
      </div>
      <div style={inputStyles}>
        <label htmlFor='address'>Adress: </label>
        <Input
          id='address'
          value={media.address}
          name='Adress'
          onChange={onValueChange}
        />
      </div>
      <div style={inputStyles}>
        <label htmlFor='privateWebsite'>Website: </label>
        <Input
          id='privateWebsite'
          value={media.website}
          name='Website'
          onChange={onValueChange}
        />
      </div>
      <div style={inputStyles}>
        <label htmlFor='linkedin'>Linkedin: </label>
        <Input
          id='linkedin'
          value={media.linkedin}
          name='Linkedin'
          onChange={onValueChange}
        />
      </div>
      <div style={inputStyles}>
        <label htmlFor='github'>Github: </label>
        <Input
          id='github'
          value={media.github}
          name='Github'
          onChange={onValueChange}
        />
      </div>
      <div style={inputStyles}>
        <label htmlFor='twitter'>Twitter: </label>
        <Input
          id='twitter'
          value={media.twitter}
          name='Twitter'
          onChange={onValueChange}
        />
      </div>
    </>
  )
}

export default SocialMedia
