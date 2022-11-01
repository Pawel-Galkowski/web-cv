import { List } from 'antd'
import { SectionTitle } from '../../Components/SectionTitle'
import { ListStyles } from './styles'

const skillsData = [
  {
    title: 'Polish',
    description: 'Native or Bilingual Proficiency',
  },
  {
    title: 'English',
    description: 'Full Professional Proficiency',
  },
]

export const Languages: React.FC = (): JSX.Element => (
  <section>
    <SectionTitle title='Languages' />
    <List
      itemLayout='horizontal'
      dataSource={skillsData}
      renderItem={(item) => (
        <List.Item>
          <ListStyles title={item.title} description={item.description} />
        </List.Item>
      )}
    />
  </section>
)
