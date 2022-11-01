import { PlayCircleFilled, AimOutlined, CarOutlined, FundProjectionScreenOutlined, FireOutlined } from '@ant-design/icons'
import { List } from 'antd'
import { SectionTitle } from '../../Components/SectionTitle'

const SkillsData = [
	{
		icon: <AimOutlined />,
		description: 'E-Sport',
	},
	{
		icon: <CarOutlined />,
		description: 'Globetrotting',
	},
	{
		icon: <FireOutlined />,
		description: 'Kickboxing',
	},
	{
		icon: <FundProjectionScreenOutlined />,
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
