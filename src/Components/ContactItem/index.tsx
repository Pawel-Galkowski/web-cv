import { FC } from 'react'
import { contactItemStyles, linkStyles } from './styles'
import { Props } from './types'

export const contactItemTestId = 'contactItem-testId'
export const contactLinkTestId = 'contactLink-testId'
export const contactInformationTestId = 'contactInformation-testId'

export const ContactItem: FC<Props> = ({ icon, link, type, name }) => (
  <span style={contactItemStyles} data-testid={contactItemTestId}>
    {icon}
    {link ? (
      <a style={linkStyles} href={type ? `${type}${link}` : link} data-testid={contactLinkTestId}>
        {name || link}
      </a>
    ) : (
      <span style={linkStyles} data-testid={contactInformationTestId}>{name}</span>
    )}
  </span>
)
