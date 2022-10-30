import {
	PhoneFilled,
	MailFilled,
	ChromeFilled,
	EnvironmentOutlined,
	GithubFilled,
	LinkedinFilled,
} from '@ant-design/icons'
import { ContactInfoStyles } from './styles'
import { ContactItem, LinkType } from './ContactItem'

export const Contact: React.FC = (): JSX.Element => (
	<section style={ContactInfoStyles}>
    <ContactItem icon={<MailFilled />} link='poczta@itgalkowski.pl' type={LinkType.MAIL} />
    <ContactItem icon={<PhoneFilled />} link='+48697522113' type={LinkType.PHONE} name='+48 697 522 113' />
		<ContactItem icon={<EnvironmentOutlined />} name='Sosnowiec, Poland' />
    <ContactItem icon={<ChromeFilled />} link='https://itgalkowski.pl' name='Web page' />
    <ContactItem icon={<LinkedinFilled />} link='https://www.linkedin.com/in/pawel-galkowski/' name='Linkedin' />
		<ContactItem icon={<GithubFilled />} link='https://github.com/Pawel-Galkowski' name='Github' />
	</section>
)
