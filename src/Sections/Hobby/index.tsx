import { List } from 'antd'
import { SectionTitle } from '../../Components/SectionTitle'
import { useAppSelector } from '../../Connectors/hooks'
import { findIconComponent } from '../../Icons'
import { HobbyType } from '../../Reducers/Hobby/types'

export const Hobby: React.FC = (): JSX.Element => {
  const hobbyInformations = useAppSelector<HobbyType[]>(
    ({ hobby }) => hobby.hobby
  )
  return (
    <div className='container'>
      <SectionTitle title='Hobby' />
      <List
        itemLayout='horizontal'
        dataSource={hobbyInformations}
        renderItem={({ icon, title }) => (
          <List.Item>
            <List.Item.Meta
              avatar={findIconComponent(icon) || findIconComponent('PlayCircleFilled')}
              title={title}
            />
          </List.Item>
        )}
      />
    </div>
  )
}
