import { Education } from '../../Components'
import { SectionTitle } from '../../Components/SectionTitle'
import { useAppSelector } from '../../Connectors/hooks'
import { EducationType } from '../../Reducers/Education/types'
import { educationStyles } from './styles'
import { v4 as uuidv4 } from 'uuid';

export const EducationGroup: React.FC = (): JSX.Element => {
  const educationInformations = useAppSelector<EducationType[]>(
    ({ edu }) => edu.edu
  )

  return (
  <div style={educationStyles}>
    <SectionTitle title='Education' />
    {educationInformations?.map(({title, school, from, to, location, project}: EducationType) => <Education
      title={title}
      school={school}
      from={from}
      to={to}
      location={location}
      project={project}
      key={uuidv4()}
    />)}
  </div>
)}
