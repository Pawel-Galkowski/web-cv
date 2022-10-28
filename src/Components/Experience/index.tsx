import { PlayCircleFilled } from "@ant-design/icons";
import { List, Typography } from "antd";
import "./styles.css";

const { Title, Paragraph } = Typography;

interface ExperiencedType {
  title: string;
  data: Array<Record<string, string>>;
  company: string;
  isPresent?: boolean;
  from: string; // change to Data
  to?: string; // change to Data
  location?: string;
  description?: string;
}

export const Experience: React.FC<ExperiencedType> = ({
  title,
  company,
  data,
  isPresent,
  from,
  to,
  location,
  description
}) => (
  <article className="experience">
    <Title level={3}>{title}</Title>
    <Title level={4}>{company}</Title>
    <small>{description}</small>
    <div className="exp-details">
      <Paragraph>
        {from} - {isPresent ? "present" : to}
      </Paragraph>
      <Paragraph>{location}</Paragraph>
    </div>
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<PlayCircleFilled style={{ color: "blue" }} />}
            description={item.description}
          />
        </List.Item>
      )}
    />
  </article>
);
