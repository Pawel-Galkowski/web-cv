import { Col, Row } from 'antd'
import {
	cardStyles,
	blankCardStyles,
	mainContentStyles,
	firstSectionStyles,
	secondSectionStyles,
	mainContentPadding,
} from './styles'
import {
	About,
	Contact,
	EducationGroup,
	ExperienceGroup,
	Hobby,
	Languages,
	Skills,
} from '../../Sections'

const BlankCard: React.FC = (): JSX.Element => (
	<Row style={blankCardStyles}>
		<Col span={24} style={cardStyles}>
			<main style={mainContentStyles}>
				<About />
				<Contact />
				<section style={firstSectionStyles}>
					<div style={mainContentPadding}>
						<ExperienceGroup />
					</div>
				</section>
				<section style={secondSectionStyles}>
					<div style={mainContentPadding}>
						<Skills />
						<EducationGroup />
						<Languages />
						<Hobby />
					</div>
				</section>
			</main>
		</Col>
	</Row>
)

export default BlankCard
