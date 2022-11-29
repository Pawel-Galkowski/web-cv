import { StyledTitle } from './styles'
import { Props } from './types'

export const sectionTitleTestId = 'sectionTitle-testId'

export const SectionTitle: React.FC<Props> = ({ title }) => (
  <StyledTitle level={3} data-testid={sectionTitleTestId}>
    {title}
  </StyledTitle>
)
