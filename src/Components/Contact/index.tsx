import {
  PhoneFilled,
  MailFilled,
  ChromeFilled,
  EnvironmentOutlined,
  GithubFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import { ContactInfoStyles } from "./styles";

export const Contact: React.FC = (): JSX.Element => (
  <section style={ContactInfoStyles}>
    <span>
      <MailFilled />
      <a href="mailto:poczta@itgalkowski.pl">poczta@itgalkowski.pl</a>
    </span>
    <span>
      <PhoneFilled />
      <a href="tel:+48697522113">+48 697 522 113</a>
    </span>
    <span>
      <EnvironmentOutlined />
      Sosnowiec, Poland
    </span>
    <span>
      <ChromeFilled />
      <a href="https://itgalkowski.pl">Web page</a>
    </span>
    <span>
      <LinkedinFilled />
      <a href="https://www.linkedin.com/in/pawel-galkowski/">Linkedin</a>
    </span>
    <span>
      <GithubFilled />
      <a href="https://github.com/Pawel-Galkowski">Github</a>
    </span>
  </section>
);
