import { PlayCircleFilled } from '@ant-design/icons'
import { List } from 'antd'
import { SectionTitle } from '../../Components/SectionTitle'
import { useAppSelector } from '../../Connectors/hooks'
import { icons } from '../../Icons'
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
              avatar={icons.find(({name}) => name === icon)?.component || <PlayCircleFilled style={{ color: 'blue' }} />}
              title={title}
            />
          </List.Item>
        )}
      />
    </div>
  )
}
