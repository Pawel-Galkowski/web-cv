import {
  PhoneFilled,
  MailFilled,
  ChromeFilled,
  EnvironmentOutlined,
  GithubFilled,
  LinkedinFilled,
  TwitterOutlined,
} from '@ant-design/icons'
import { ContactInfoStyles } from './styles'
import { ContactItem } from '../../Components/ContactItem'
import { LinkType } from '../../Components/ContactItem/types'
import { useAppSelector } from '../../Connectors/hooks'
import { WebsiteTypes } from '../../Reducers/SocialMedia/types'

export const Contact: React.FC = (): JSX.Element => {
  const contactInformations = useAppSelector<WebsiteTypes>(
    ({ socialMedia }) => socialMedia.web
  )
  return (
    <section style={ContactInfoStyles}>
      {contactInformations.mail && (
        <ContactItem
          icon={<MailFilled />}
          link={contactInformations.mail}
          type={LinkType.MAIL}
        />
      )}
      {contactInformations.phone && (
        <ContactItem
          icon={<PhoneFilled />}
          link={contactInformations.phone.replaceAll(/\s/g,'')}
          type={LinkType.PHONE}
          name={contactInformations.phone}
        />
      )}
      {contactInformations.address && (
        <ContactItem icon={<EnvironmentOutlined />} name='Sosnowiec, Poland' />
      )}
      {contactInformations.website && (
        <ContactItem
          icon={<ChromeFilled />}
          link={contactInformations.website}
          name='Web page'
        />
      )}
      {contactInformations.linkedin && (
        <ContactItem
          icon={<LinkedinFilled />}
          link={contactInformations.linkedin}
          name='Linkedin'
        />
      )}
      {contactInformations.github && (
        <ContactItem
          icon={<GithubFilled />}
          link={contactInformations.github}
          name='Github'
        />
      )}
      {contactInformations.twitter && (
        <ContactItem
          icon={<TwitterOutlined />}
          link={contactInformations.twitter}
          name='Twitter'
        />
      )}
    </section>
  )
}
