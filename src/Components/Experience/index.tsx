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
  <article style={experienceStyles}>
    <StyledJobTitle level={3}>{title}</StyledJobTitle>
    <StyledCompanyTitle level={4}>{company}</StyledCompanyTitle>
    <small style={descritionStyles}>{description}</small>
    <div style={detailsStyles}>
      <StyledParagraph>
        {from} - {isPresent ? 'Present' : to}
      </StyledParagraph>
      <StyledParagraph>{location}</StyledParagraph>
    </div>
    <List
      itemLayout='horizontal'
      dataSource={data}
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
