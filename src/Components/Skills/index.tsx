import { FC } from 'react'
import { StyledTitle, StyledTag } from './styles'

interface CustomTag {
	title: string
}

const CustomTag: FC<CustomTag> = ({ title }): JSX.Element => (
	<StyledTag>{title}</StyledTag>
)

export const Skills: FC = (): JSX.Element => (
	<>
		<StyledTitle level={3}>Skills</StyledTitle>
		<CustomTag title='Javascript' />
		<CustomTag title='TypeScript' />
		<CustomTag title='Angular' />
		<CustomTag title='HTML/Bootstrap/Grid/Flex' />
		<CustomTag title='Ajax' />
		<CustomTag title='CSS/SCSS/LESS' />
		<CustomTag title='REACT/REDUX' />
		<CustomTag title='Node/Express' />
		<CustomTag title='GIT/Github/AWS' />
		<CustomTag title='MongoDB' />
		<CustomTag title='Mocha/Jest/Jasmin' />
		<CustomTag title='Jira/Confluence/Postman' />
		<CustomTag title='JQuery' />
		<CustomTag title='Storybook' />
	</>
)
