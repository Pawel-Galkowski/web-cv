import { FC } from 'react'
import { contactItemStyles } from './styles'

export enum LinkType {
	MAIL = 'mailto:',
	PHONE = 'tel:',
}

interface Props {
	icon: JSX.Element
	link?: string
	type?: LinkType
	name?: string
}

export const ContactItem: FC<Props> = ({ icon, link, type, name }) => (
	<span style={contactItemStyles}>
		{icon}
		{link ? <a href={type ? `${type}${link}` : link}>{name || link}</a> : name}
	</span>
)
