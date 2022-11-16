import {
  educationStyles,
  detailsStyles,
  StyledJobTitle,
  StyledCompanyTitle,
  StyledParagraph,
} from './styles'
import { EducationType } from './types'

const Experience: React.FC<EducationType> = ({
  title,
  project,
  school,
  isPresent,
  from,
  to,
  location,
}) => (
  <article style={educationStyles}>
    <StyledJobTitle level={3}>{title}</StyledJobTitle>
    <StyledCompanyTitle level={4}>{school}</StyledCompanyTitle>
    <div style={detailsStyles}>
      <StyledParagraph>
        {from} - {isPresent ? 'Present' : to}
      </StyledParagraph>
      <StyledParagraph>{location}</StyledParagraph>
    </div>
    {project}
  </article>
)

export default Experience
