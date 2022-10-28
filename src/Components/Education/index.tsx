import { Typography } from "antd";
import "./styles.css";

const { Title, Paragraph } = Typography;

export const Education: React.FC = (): JSX.Element => (
  <div className="container">
    <Title level={3}>Education</Title>
    <Title level={5}>BTech in Computer Science</Title>
    <Title level={4}>Opole University of Technology</Title>
    <div className="exp-details">
      <Paragraph>2016 - 2020</Paragraph>
      <Paragraph>Opole, Poland</Paragraph>
    </div>
    <Paragraph>
      Developed a full-stack web application, "Recrutiment Platform" using React
      that allows users to post job for recruiters and find job for other users.
      Backend is created using Node/Express and MongoDB.
    </Paragraph>
  </div>
);
