import { Avatar, Typography } from 'antd'
import {
  aboutLayoutStyles,
  avatarStyles,
  bioStyles,
  nameStyles,
  roleStyles,
  typographyStyles,
} from './styles'
import { useAppSelector } from '../../Connectors/hooks'
import { findIconComponent } from '../../Icons'

const { Title, Paragraph } = Typography

export const About: React.FC = (): JSX.Element => {
  const profileInformations = useAppSelector(
    ({ profile: { name, title, bio } }) => ({
      name,
      title,
      bio,
    })
  )

  return (
    <section style={aboutLayoutStyles}>
      <article style={bioStyles}>
        <Title level={2} style={nameStyles}>
          {profileInformations.name}
        </Title>
        <Title level={4} style={roleStyles}>
          {profileInformations.title}
        </Title>
        <Paragraph style={typographyStyles}>
          {profileInformations.bio}
        </Paragraph>
      </article>
      <Avatar
        style={avatarStyles}
        src='/avatar.jpg'
        alt='avatar'
        icon={findIconComponent('UserOutlined')}
      />
    </section>
  )
}
