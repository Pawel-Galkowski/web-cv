import {
  educationStyles,
  detailsStyles,
  StyledJobTitle,
  StyledCompanyTitle,
  StyledParagraph,
} from './styles'
import { EducationType } from './types'

export const educationTestId = 'education-testId'
export const dateTestId = 'date-testId'
export const locationTestId = 'location-testId'

const Education: React.FC<EducationType> = ({
  title,
  project,
  school,
  isPresent = false,
  from,
  to,
  location,
}) => (
  <article style={educationStyles} data-testid={educationTestId}>
    <StyledJobTitle level={3}>{title}</StyledJobTitle>
    <StyledCompanyTitle level={4}>{school}</StyledCompanyTitle>
    <div style={detailsStyles}>
      <StyledParagraph data-testid={dateTestId}>
        {from} - {isPresent ? 'Present' : to}
      </StyledParagraph>
      <StyledParagraph data-testid={locationTestId}>{location}</StyledParagraph>
    </div>
    {project}
  </article>
)

export default Education
