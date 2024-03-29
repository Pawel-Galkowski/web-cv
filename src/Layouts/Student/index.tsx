import { FC } from "react";
import { Col, Row } from "antd";
import { cardStyles } from "./styles";
import "./style.css";

const BlankCard: FC = (): JSX.Element => {
  return (
    <Row className="body">
      <Col span={24} style={cardStyles}>
        <main className="main-content">
          <section className="left-section">
            <div className="left-content">
              <div className="profile">
                <div className="image">
                  <img src="/avatar.jpg" alt="" />
                </div>
                <h2 className="name">Pawel Galkowski</h2>
                <p className="career">Software Engineer</p>
              </div>
              <div className="contact-info">
                <h3 className="main-title">Contact Info</h3>
                <ul>
                  <li>
                    <i className="fa fa-phone"></i>
                    <a href="tel:+48697522113">+48 697 522 113</a>
                  </li>
                  <li>
                    <i className="fa fa-fax"></i>
                    <a href="mailto:poczta@itgalkowski.pl">
                      poczta@itgalkowski.pl
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-globe"></i>
                    <a href="https://itgalkowski.pl">Web page</a>
                  </li>
                  <li>
                    <i className="fa fa-linkedin"></i>
                    <a href="https://www.linkedin.com/in/pawel-galkowski/">
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-map-marker"></i>
                    Sosnowiec, Poland
                  </li>
                </ul>
              </div>
              <div className="skills-section">
                <h3 className="main-title">Languages</h3>
                <ul>
                  <li>
                    <p className="skill-title">Polish</p>
                    <div className="progress-bar">
                      <div className="progress js-progress">Native or Bilingual Proficiency</div>
                    </div>
                  </li>
                  <li>
                  <p className="skill-title">English</p>
                    <div className="progress-bar">
                      <div className="progress js-progress">Full Professional Proficiency</div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="skills-section">
                <h3 className="main-title">Interests</h3>
                <ul>
                  <li>
                    <p className="skill-title">E-Sport</p>
                  </li>
                  <li>
                  <p className="skill-title">Globetrotting</p>
                  </li>
                  <li>
                    <p className="skill-title">Kickboxing</p>
                  </li>
                  <li>
                  <p className="skill-title">Analitics</p>
                  </li>
                </ul>
              </div>
              <div className="skills-section">
                <h3 className="main-title">Skills</h3>
                <ul>
                  <li>
                    <p className="skill-title">Javascript</p>
                    <div className="progress-bar">
                      <div className="progress js-progress"></div>
                    </div>
                  </li>
                  <li>
                    <p className="skill-title">TypeScript</p>
                    <div className="progress-bar">
                      <div className="progress ps-progress"></div>
                    </div>
                  </li>
                  <li>
                    <p className="skill-title">HTML/Bootstrap/Grid/Flex</p>
                    <div className="progress-bar">
                      <div className="progress j-progress"></div>
                    </div>
                  </li>
                  <li>
                    <p className="skill-title">CSS/SCSS/LESS</p>
                    <div className="progress-bar">
                      <div className="progress c-progress"></div>
                    </div>
                  </li>
                  <li>
                    <p className="skill-title">REACT/REDUX</p>
                    <div className="progress-bar">
                      <div className="progress ps-progress"></div>
                    </div>
                  </li>
                  <li>
                    <p className="skill-title">Node/Express</p>
                    <div className="progress-bar">
                      <div className="progress n-progress"></div>
                    </div>
                  </li>
                  <li>
                    <p className="skill-title">MongoDB</p>
                    <div className="progress-bar">
                      <div className="progress ps-progress"></div>
                    </div>
                  </li>
                  <li>
                    <p className="skill-title">Angular</p>
                    <div className="progress-bar">
                      <div className="progress ps-progress"></div>
                    </div>
                  </li>
                  <li>
                    <p className="skill-title">Mocha/Jest/Jasmin</p>
                    <div className="progress-bar">
                      <div className="progress ps-progress"></div>
                    </div>
                  </li>
                  <li>
                    <p className="skill-title">Storybook</p>
                    <div className="progress-bar">
                      <div className="progress ps-progress"></div>
                    </div>
                  </li>
                  <li>
                    <p className="skill-title">GIT/Github/AWS</p>
                    <div className="progress-bar">
                      <div className="progress ps-progress"></div>
                    </div>
                  </li>
                  <li>
                    <p className="skill-title">Ajax</p>
                    <div className="progress-bar">
                      <div className="progress ps-progress"></div>
                    </div>
                  </li>
                  <li>
                    <p className="skill-title">JQuery</p>
                    <div className="progress-bar">
                      <div className="progress ps-progress"></div>
                    </div>
                  </li>
                  <li>
                    <p className="skill-title">Jira/Confluence/Postman</p>
                    <div className="progress-bar">
                      <div className="progress ps-progress"></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="right-section">
            <div className="right-main-content">
              <section className="about sect">
                <h2 className="right-title">About Me</h2>
                <p className="para">
                  Creative Software Engineer with 4+ years of experience with
                  understanding of Web Development, developing web applications
                  using JavaScript frameworks and libraries with relative and
                  no-relative databases.
                </p>
              </section>
              <section className="experince sect">
                <h2 className="right-title">Experience</h2>
                <div className="timeline">
                  <div className="left-tl-content">
                    <h5 className="tl-title">Capgemini SE</h5>
                    <p className="para">05/2022 - Present</p>
                    <p className="para">Wroclaw / Remote</p>
                  </div>
                  <div className="right-tl-content">
                    <div className="tl-content">
                      <h5 className="tl-title-2">Software Engineer</h5>
                      <p className="para">
                        <ul>
                          <li>
                            Developed several React components for new website
                            project.
                          </li>
                          <li>
                            Attended daily Scrum meetings, kept up-to-date on
                            best practices for JavaScript frameworks and
                            techniques.
                          </li>
                          <li>
                            Learned Angular for new implementations in project.
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="timeline">
                  <div className="left-tl-content">
                    <h5 className="tl-title">ING Bank Śląski S.A.</h5>
                    <p className="para">12/2020 - 05/2022</p>
                    <p className="para">Katowice / Remote</p>
                    <small>
                      The ING Group is a Dutch multinational banking and
                      financial services corporation headquartered in Amsterdam
                    </small>
                  </div>
                  <div className="right-tl-content">
                    <div className="tl-content">
                      <h5 className="tl-title-2">JavaScript Developer</h5>
                      <p className="para">
                        <ul>
                          <li>Maintained cross platform banking system.</li>
                          <li>
                            Prepared mock data for quality engineer necessary
                            for automated tests.
                          </li>
                          <li>
                            Worked closely with agile team and provided
                            end-to-end solutions.
                          </li>
                          <li>
                            Developed new JavaScript components for web
                            application.
                          </li>
                          <li>
                            Actively traced and fixed bugs as they were
                            discovered.
                          </li>
                          <li>
                            Implemented storybook and a lot of informations
                            inside a storybook about components to improve
                            developers work.
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="timeline">
                  <div className="left-tl-content">
                    <h5 className="tl-title">Instal-Konsorcjum Sp. z o.o.</h5>
                    <p className="para">07/2018 - 12/2020</p>
                    <p className="para">Wroclaw</p>
                    <small>
                      Instal-Konsorcjum represent one of the biggest web of
                      installation wholesalers in Poland. It is a member of EDT
                      Group with headquarter in Essen(DE)
                    </small>
                  </div>
                  <div className="right-tl-content">
                    <div className="tl-content">
                      <h5 className="tl-title-2">
                        Junior Full-Stack Developer
                      </h5>
                      <p className="para">
                        <ul>
                          <li>
                            Implemented a client ticket dashboard, reducing
                            calls by 40%.
                          </li>
                          <li>
                            Worked closely with clients to establish problems
                            specifications.
                          </li>
                          <li>
                            Created 30 responsive websites using Wordpress and
                            Joomla which replaced non-responsive pages and
                            result 18% faster load time.
                          </li>
                          <li>
                            Implemented Google tools to generated 10% up to 20%
                            more visitors per page. (Google Analitics, Search
                            Console)
                          </li>
                          <li>
                            Worked on internal applications. (JavaScript, PHP,
                            MySql, HTML, CSS, C#)
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="timeline">
                  <div className="left-tl-content">
                    <h5 className="tl-title">Regional Hospital in Raciborz</h5>
                    <p className="para">01/2017 - 07/2017</p>
                    <p className="para">Raciborz</p>
                  </div>
                  <div className="right-tl-content">
                    <div className="tl-content">
                      <h5 className="tl-title-2">Computer Specialist</h5>
                      <p className="para">
                        <ul>
                          <li>
                            Implemented new site of company. (JavaScript, HTML,
                            CSS)
                          </li>
                          <li>
                            Closed 90% of trouble tickets on the first call
                            without escalation.
                          </li>
                          <li>
                            Repaired and speed up machines by replacement of
                            subassemblies.
                          </li>
                          <li>Set up 50% of new computers in whole company.</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section className="education sect">
                <h2 className="right-title">education</h2>
                <div className="timeline">
                  <div className="left-tl-content">
                    <h5 className="tl-title">Opole University of Technology</h5>
                    <p className="para">2016 - 2020</p>
                    <p className="para">Opole, Poland</p>
                  </div>
                  <div className="right-tl-content">
                    <div className="tl-content">
                      <h5 className="tl-title-2">BTech in Computer Science</h5>
                      <p className="para">
                        Developed a full-stack web application, "Recrutiment
                        Platform" using React that allows users to post job for
                        recruiters and find job for other users. Backend is
                        created using Node/Express and MongoDB.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </main>
      </Col>
    </Row>
  );
};

export default BlankCard;
