import { Typography, Tag } from 'antd'
import { CSSProperties } from 'react'
import styled from 'styled-components'

export const StyledTag = styled(Tag)`
	margin: 4px;
	background-color: blue;
	color: white;
	border: blue;
	border-radius: 5px;
	text-transform: capitalize;
`

export const StyledTitle = styled(Typography.Title)`
	color: white;
`

export const tagStyles: CSSProperties = {
	margin: '4px',
	backgroundColor: 'blue',
	color: 'white',
	border: 'blue',
	borderRadius: '5px',
	textTransform: 'capitalize',
}
