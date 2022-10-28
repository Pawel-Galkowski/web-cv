import { PlayCircleFilled, RocketFilled } from "@ant-design/icons";
import { List, Typography } from "antd";

const { Title } = Typography;

const SkillsData = [
  {
    icon: <RocketFilled />,
    description: "E-Sport",
  },
  {
    description: "Globetrotting",
  },
  {
    description: "Kickboxing",
  },
  {
    description: "Analitics",
  },
];

export const Hobby: React.FC = (): JSX.Element => (
  <div className="container">
    <Title level={3}>Interests</Title>
    <List
      itemLayout="horizontal"
      dataSource={SkillsData}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={item.icon || <PlayCircleFilled style={{ color: "blue" }} />}
            description={item.description}
          />
        </List.Item>
      )}
    />
  </div>
);
