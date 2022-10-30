import { PlayCircleFilled } from '@ant-design/icons'
import { List, Typography } from 'antd'
import { experienceStyles, listStyles } from './styles'
import { ExperiencedType } from './types'

const { Title, Paragraph } = Typography

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
		<Title level={3}>{title}</Title>
		<Title level={4}>{company}</Title>
		<small>{description}</small>
		<div className='exp-details'>
			<Paragraph>
				{from} - {isPresent ? 'present' : to}
			</Paragraph>
			<Paragraph>{location}</Paragraph>
		</div>
		<List
			itemLayout='horizontal'
			dataSource={data}
			renderItem={(item) => (
				<List.Item>
					<List.Item.Meta
						avatar={<PlayCircleFilled style={{ color: 'blue' }} />}
						description={item.description}
						style={listStyles}
					/>
				</List.Item>
			)}
		/>
	</article>
)

export default Experience
