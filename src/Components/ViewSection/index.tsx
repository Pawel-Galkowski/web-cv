import { Col, Row } from 'antd'
import {
  cardStyles,
  blankCardStyles,
  mainContentStyles,
  firstSectionStyles,
  secondSectionStyles,
  mainContentPadding,
} from './styles'
import {
  About,
  Contact,
  EducationGroup,
  ExperienceGroup,
  Hobby,
  Languages,
  Skills,
} from '../../Sections'
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'

export const viewSectionTestId = 'viewSection-testId'
export const printSectionTestId = 'printSection-testId'
const printSectionId = 'printSection'

const mainValue: JSX.Element = (
  <Row style={blankCardStyles} data-testid={viewSectionTestId}>
    <Col span={24} style={cardStyles}>
      <main style={mainContentStyles} id={printSectionId} data-testid={printSectionTestId}>
        <About />
        <Contact />
        <section style={firstSectionStyles}>
          <div style={mainContentPadding}>
            <ExperienceGroup />
          </div>
        </section>
        <section style={secondSectionStyles}>
          <div style={mainContentPadding}>
            <Skills />
            <EducationGroup />
            <Languages />
            <Hobby />
          </div>
        </section>
      </main>
    </Col>
  </Row>
)

const ViewSection: React.FC = (): JSX.Element => mainValue

export const printDocument = () => {
  const element: HTMLElement | null  = document.getElementById(printSectionId)
  element ? html2canvas(element).then(
    (canvas) => {
      const pdf = new jsPDF('p', 'mm', 'a4')
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298)
      pdf.save('download.pdf')
    }
  // eslint-disable-next-line no-console
  ) : console.error('cannot create pdf')
}

export default ViewSection
