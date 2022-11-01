import { CSSProperties } from 'react'
import { Typography, List } from 'antd'
import styled from 'styled-components'
import Colors from '../../theme'

export const StyledJobTitle = styled(Typography.Title)`
	margin: 0 !important;
	font-weight: bold !important;
`

export const StyledCompanyTitle = styled(Typography.Title)`
	margin: 0 !important;
`

export const experienceStyles = {
	marginBottom: '1.5rem',
}

export const descritionStyles: CSSProperties = {
	fontStyle: 'italic',
	fontWeight: '500',
}

export const detailsStyles: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	fontStyle: 'italic',
	justifyContent: 'space-between',
}

export const StyledParagraph = styled(Typography.Paragraph)`
	color: ${Colors.orange} !important;
`

export const StyledList = styled(List.Item)`
	padding: 0 !important;
`