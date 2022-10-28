import { List, Typography } from "antd";

const { Title } = Typography;

const SkillsData = [
  {
    title: "Polish",
    description: "Native or Bilingual Proficiency",
  },
  {
    title: "English",
    description: "Full Professional Proficiency",
  },
];

export const Languages: React.FC = (): JSX.Element => (
  <div className="container">
    <Title level={3}>Languages</Title>
    <List
      itemLayout="horizontal"
      dataSource={SkillsData}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta title={item.title} description={item.description} />
        </List.Item>
      )}
    />
  </div>
);
