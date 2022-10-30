import { UserOutlined } from "@ant-design/icons";
import { Avatar, Typography } from "antd";
import { AboutLayoutStyles, AvatarStyles, NameStyles, RoleStyles, TypographyStyles } from "./styles";

const { Title, Paragraph } = Typography;

export const About: React.FC = (): JSX.Element => (
  <section style={AboutLayoutStyles}>
    <div>
      <Title level={2} style={NameStyles}>Pawel Galkowski</Title>
      <Title level={4} style={RoleStyles}>Software Engineer</Title>
      <Paragraph style={TypographyStyles}>
        Creative Software Engineer with 4+ years of experience with
        understanding of Web Development, developing web applications using
        JavaScript frameworks and libraries with relative and no-relative
        databases.
        </Paragraph>
    </div>
    <Avatar style={AvatarStyles} size={150} src="/avatar.jpg" alt="avatar" icon={<UserOutlined />} />
  </section>
);
