import { FC } from 'react'
import { contactItemStyles, linkStyles } from './styles'
import { Props } from './types'

export const ContactItem: FC<Props> = ({ icon, link, type, name }) => (
	<span style={contactItemStyles}>
		{icon}
		{link ? (
			<a style={linkStyles} href={type ? `${type}${link}` : link}>
				{name || link}
			</a>
		) : (
			<span style={linkStyles}>{name}</span>
		)}
	</span>
)
