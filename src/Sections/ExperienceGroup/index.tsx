import { Experience } from '../../Components'
import { SectionTitle } from '../../Components/SectionTitle'
import { useAppSelector } from '../../Connectors/hooks'
import { ExperienceType } from '../../Reducers/Experience/types'

export const ExperienceGroup: React.FC = () => {
  const experienceInformations = useAppSelector<ExperienceType[]>(
    ({ exp }) => exp.exp
  )
  return (
    <section>
      <SectionTitle title='Experience' />
      {experienceInformations?.map((exp: ExperienceType) => <Experience
        title={exp.title}
        company={exp.company}
        description={exp.description}
        from={exp.from}
        to={exp.to}
        location={exp.location}
        data={exp.data}
        isPresent={exp.isPresent}
      />)}
    </section>
  )
}
