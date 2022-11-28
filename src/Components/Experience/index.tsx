import { PlayCircleFilled } from '@ant-design/icons'
import { List } from 'antd'
import {
  experienceStyles,
  detailsStyles,
  descritionStyles,
  StyledParagraph,
  StyledCompanyTitle,
  StyledJobTitle,
  StyledList,
} from './styles'
import { ExperiencedType } from './types'

export const experienceTestId = 'education-testId'
export const dateTestId = 'date-testId'
export const workDataTestId = 'workData-testId'
export const locationTestId = 'location-testId'

const Experience: React.FC<ExperiencedType> = ({
  title,
  company,
  data,
  isPresent,
  from,
  to,
  location,
  description,
}) => (
  <article style={experienceStyles} data-testid={experienceTestId}>
    <StyledJobTitle level={3}>{title}</StyledJobTitle>
    <StyledCompanyTitle level={4}>{company}</StyledCompanyTitle>
    <small style={descritionStyles}>{description}</small>
    <div style={detailsStyles}>
      <StyledParagraph data-testid={dateTestId}>
        {from} - {isPresent ? 'Present' : to}
      </StyledParagraph>
      <StyledParagraph data-testid={locationTestId}>{location}</StyledParagraph>
    </div>
    <List
      itemLayout='horizontal'
      dataSource={data}
      data-testid={workDataTestId}
      renderItem={(item: string) => (
        <StyledList>
          <List.Item.Meta
            avatar={<PlayCircleFilled style={{ color: 'red' }} />}
            description={item}
          />
        </StyledList>
      )}
    />
  </article>
)

export default Experience
