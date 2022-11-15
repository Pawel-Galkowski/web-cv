import { List } from 'antd'
import { SectionTitle } from '../../Components/SectionTitle'
import { useAppSelector } from '../../Connectors/hooks'
import { LanguageType } from '../../Reducers/Languages/types'
import { ListStyles } from './styles'

export const Languages: React.FC = (): JSX.Element => {
  const languagesInformations = useAppSelector<LanguageType[]>(
    ({ languages }) => languages.lang
  )
  return (
    <section>
      <SectionTitle title='Languages' />
      <List
        itemLayout='horizontal'
        dataSource={languagesInformations}
        renderItem={(item) => (
          <List.Item>
            <ListStyles title={item.title} description={item.level} />
          </List.Item>
        )}
      />
    </section>
  )
}
