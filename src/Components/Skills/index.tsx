import { Typography, Tag } from "antd";
import "./styles.css";

const { Title } = Typography;

export const Skills: React.FC = (): JSX.Element => (
  <>
    <Title level={3}>Skills</Title>
    <Tag>Javascript</Tag>
    <Tag>TypeScript</Tag>
    <Tag>Angular</Tag>
    <Tag>HTML/Bootstrap/Grid/Flex</Tag>
    <Tag>Ajax</Tag>
    <Tag>CSS/SCSS/LESS</Tag>
    <Tag>REACT/REDUX</Tag>
    <Tag>Node/Express</Tag>
    <Tag>GIT/Github/AWS</Tag>
    <Tag>MongoDB</Tag>
    <Tag>Mocha/Jest/Jasmin</Tag>
    <Tag>Jira/Confluence/Postman</Tag>
    <Tag>JQuery</Tag>
    <Tag>Storybook</Tag>
  </>
);
