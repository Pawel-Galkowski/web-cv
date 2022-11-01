import { UserOutlined } from '@ant-design/icons'
import { Avatar, Typography } from 'antd'
import {
  aboutLayoutStyles,
  avatarStyles,
  bioStyles,
  nameStyles,
  roleStyles,
  typographyStyles,
} from './styles'

const { Title, Paragraph } = Typography

export const About: React.FC = (): JSX.Element => (
  <section style={aboutLayoutStyles}>
    <article style={bioStyles}>
      <Title level={2} style={nameStyles}>
        Pawel Galkowski
      </Title>
      <Title level={4} style={roleStyles}>
        Software Engineer
      </Title>
      <Paragraph style={typographyStyles}>
        Creative Software Engineer with 4+ years of experience with
        understanding of Web Development, developing web applications using
        JavaScript frameworks and libraries with relative and no-relative
        databases.
      </Paragraph>
    </article>
    <Avatar
      style={avatarStyles}
      size={150}
      src='/avatar.jpg'
      alt='avatar'
      icon={<UserOutlined />}
    />
  </section>
)
