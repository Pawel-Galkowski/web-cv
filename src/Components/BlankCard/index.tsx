import { Col, Row } from "antd"
import {
	cardStyles,
	blankCardStyles,
	mainContentStyles,
	firstSectionStyles,
	secondSectionStyles,
	mainContentPadding,
} from "./styles"
import {
	About,
	Contact,
	Education,
	ExperienceGroup,
	Hobby,
	Languages,
	Skills,
} from "../"

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
						<Education />
						<Languages />
						<Hobby />
					</div>
				</section>
			</main>
		</Col>
	</Row>
)

export default BlankCard
