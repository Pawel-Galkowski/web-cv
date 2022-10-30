import { Tag } from 'antd'
import { FC } from 'react'
import { StyledTitle, StyledTag, tagStyles } from './styles'

interface CustomTag {
	children: string
}

const CustomTag: React.FC<CustomTag> = ({ children }): JSX.Element => (
	<StyledTag>{children}</StyledTag>
)

export const Skills: FC = (): JSX.Element => (
	<div>
		<StyledTitle level={3}>Skills</StyledTitle>
		<CustomTag>Javascript</CustomTag>
		<CustomTag>TypeScript</CustomTag>
		<Tag>Angular</Tag>
		<StyledTag>HTML/Bootstrap/Grid/Flex</StyledTag>
		<StyledTag>Ajax</StyledTag>
		<StyledTag>CSS/SCSS/LESS</StyledTag>
		<StyledTag>REACT/REDUX</StyledTag>
		<StyledTag>Node/Express</StyledTag>
		<StyledTag>GIT/Github/AWS</StyledTag>
		<StyledTag>MongoDB</StyledTag>
		<StyledTag>Mocha/Jest/Jasmin</StyledTag>
		<StyledTag>Jira/Confluence/Postman</StyledTag>
		<StyledTag>JQuery</StyledTag>
		<StyledTag>Storybook</StyledTag>
	</div>
)
