import { Col, Row } from "antd"
import { cardStyles } from "./styles"
import {
	About,
	Contact,
	Education,
	ExperienceGroup,
	Hobby,
	Languages,
	Skills,
} from "../"
import "./styles.css"

const BlankCard: React.FC = (): JSX.Element => (
	<Row className="body">
		<Col span={24} style={cardStyles}>
			<main className="main-content">
				<About />
				<Contact />
				<section className="left-section">
					<div className="left-content">
						<ExperienceGroup />
					</div>
				</section>
				<section className="right-section">
					<div className="right-main-content">
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
