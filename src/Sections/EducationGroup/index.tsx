import { Education } from '../../Components'
import { SectionTitle } from '../../Components/SectionTitle'
import { educationStyles } from './styles'

export const EducationGroup: React.FC = (): JSX.Element => (
  <div style={educationStyles}>
    <SectionTitle title='Education' />
    <Education
      title='BTech in Computer Science'
      school='Opole University of Technology'
      from='2016'
      to='2020'
      location='Opole, Poland'
      project='Developed a full-stack web application, "Recrutiment Platform" using React that allows users to post job for recruiters and find job for other users. Backend is created using Node/Express and MongoDB.'
    />
  </div>
)
