import { PlayCircleFilled, RocketFilled } from '@ant-design/icons'
import { List } from 'antd'
import { SectionTitle } from '../../Components/SectionTitle'

const SkillsData = [
	{
		icon: <RocketFilled />,
		description: 'E-Sport',
	},
	{
		description: 'Globetrotting',
	},
	{
		description: 'Kickboxing',
	},
	{
		description: 'Analitics',
	},
]

export const Hobby: React.FC = (): JSX.Element => (
	<div className='container'>
		<SectionTitle title='Interests' />
		<List
			itemLayout='horizontal'
			dataSource={SkillsData}
			renderItem={(item) => (
				<List.Item>
					<List.Item.Meta
						avatar={item.icon || <PlayCircleFilled style={{ color: 'blue' }} />}
						description={item.description}
					/>
				</List.Item>
			)}
		/>
	</div>
)
