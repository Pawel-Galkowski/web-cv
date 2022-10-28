import { Typography } from "antd";
import { Experience } from "..";
import "./styles.css";

const { Title } = Typography;

const CapgeminiData = [
  {
    description: "Developed several React components for new website project.",
  },
  {
    description:
      "Attended daily Scrum meetings, kept up-to-date on best practices for JavaScript frameworks and techniques.",
  },
  {
    description: "Learned Angular for new implementations in project.",
  },
];

const INGData = [
  {
    description: "Maintained cross platform banking system.",
  },
  {
    description:
      "Prepared mock data for quality engineer necessary for automated tests.",
  },
  {
    description:
      "Worked closely with agile team and provided end-to-end solutions.",
  },
  {
    description: "Developed new JavaScript components for web application.",
  },
  {
    description: "Actively traced and fixed bugs as they were discovered.",
  },
  {
    description:
      "Implemented storybook and a lot of informations inside a storybook about components to improve developers work.",
  },
];

const IKData = [
  {
    description:
      "Implemented a client ticket dashboard, reducing calls by 40%.",
  },
  {
    description:
      "Worked closely with clients to establish problems specifications.",
  },
  {
    description:
      "Created 30 responsive websites using Wordpress and Joomla which  replaced non-responsive pages and result 18% faster load time.",
  },
  {
    description:
      "Implemented Google tools to generated 10% up to 20% more visitors per page. (Google Analitics, Search Console)",
  },
  {
    description:
      "Worked on internal applications. (JavaScript, PHP, MySql, HTML, CSS, C#)",
  },
];

const HospitalData = [
  {
    description:
      "IImplemented new site of company. (JavaScript, HTML, CSS)",
  },
  {
    description:
      "Closed 90% of trouble tickets on the first call without escalation.",
  },
  {
    description:
      "Repaired and speed up machines by replacement of subassemblies.",
  },
  {
    description:
      "Set up 50% of new computers in whole company.",
  },
];

export const ExperienceGroup = () => (
  <section className="container">
    <Title level={3} className="right-title">
      Experience
    </Title>
    <Experience
      title="Software Engineer"
      company="Capgemini SE"
      from="05/2022"
      location="Wroclaw / Remote"
      data={CapgeminiData}
      isPresent
    />
    <Experience
      title="JavaScript Developer"
      company="ING Bank Śląski S.A."
      description="The ING Group is a Dutch multinational banking and financial services corporation headquartered in Amsterdam"
      from="12/2020"
      to="05/2022"
      location="Katowice / Remote"
      data={INGData}
    />
    <Experience
      title="Junior Full-Stack Developer"
      company="Instal-Konsorcjum Sp. z o.o."
      description="Instal-Konsorcjum represent one of the biggest web of installation wholesalers in Poland. It is a member of EDT Group with headquarter in Essen(DE)"
      from="07/2018"
      to="12/2020"
      location="Wroclaw"
      data={IKData}
    />
    <Experience
      title="Computer Specialist"
      company="Regional Hospital in Raciborz"
      from="01/2017"
      to="07/2017"
      location="Raciborz"
      data={HospitalData}
    />
  </section>
);
