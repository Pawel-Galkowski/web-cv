import { Tag } from 'antd'
import styled from 'styled-components'
import Colors from '../../theme'

export const StyledTag = styled(Tag)`
	margin: 4px;
	background-color: ${Colors.grey};
	color: ${Colors.white};
	border-radius: 5px;
	text-transform: capitalize;
`
