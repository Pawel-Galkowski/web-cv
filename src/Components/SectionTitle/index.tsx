import { StyledTitle } from './styles'
import { Props } from './types'

export const SectionTitle: React.FC<Props> = ({ title }) => {
	return <StyledTitle level={3}>{title}</StyledTitle>
}
