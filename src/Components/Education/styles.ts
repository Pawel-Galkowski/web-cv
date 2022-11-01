import { CSSProperties } from 'react'
import { Typography } from 'antd'
import styled from 'styled-components'
import Colors from '../../theme'

export const educationStyles: CSSProperties = {
	margin: "12px 0",
}

export const detailsStyles: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	fontStyle: 'italic',
	justifyContent: 'space-between',
}

export const StyledJobTitle = styled(Typography.Title)`
	margin: 0 !important;
	font-weight: bold !important;
`

export const StyledCompanyTitle = styled(Typography.Title)`
	margin: 0 !important;
`

export const StyledParagraph = styled(Typography.Paragraph)`
	color: ${Colors.orange} !important;
`