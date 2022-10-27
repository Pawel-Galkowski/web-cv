import { Col, Row } from "antd";
import { cardStyles } from "./styles";
import "./style.css";
import {
  About,
  Contact,
  Education,
  Experience,
  Hobby,
  Languages,
  Skills,
} from "../";

const BlankCard: React.FC = (): JSX.Element => (
  <Row className="body">
    <Col span={24} style={cardStyles}>
      <main className="main-content">
        <About />
        <Contact />
        <section className="left-section">
          <div className="left-content">
            <Experience />
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
);

export default BlankCard;
