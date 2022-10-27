import {
    PhoneFilled,
    MailFilled,
    ChromeFilled,
    EnvironmentOutlined,
    GithubFilled,
    LinkedinFilled,
  } from "@ant-design/icons";

export const Contact: React.FC = (): JSX.Element => (
    <section className="contact-info">
          <p>
              <MailFilled />
              <a href="mailto:poczta@itgalkowski.pl">poczta@itgalkowski.pl</a>
            </p>
            <p>
              <PhoneFilled />
              <a href="tel:+48697522113">+48 697 522 113</a>
            </p>
            <p>
              <EnvironmentOutlined />
              Sosnowiec, Poland
            </p>
            <p>
              <ChromeFilled />
              <a href="https://itgalkowski.pl">Web page</a>
            </p>
            <p>
              <LinkedinFilled />
              <a href="https://www.linkedin.com/in/pawel-galkowski/">
                Linkedin
              </a>
            </p>
            <p>
              <GithubFilled />
              <a href="https://github.com/Pawel-Galkowski">Github</a>
            </p>
          </section>
);
