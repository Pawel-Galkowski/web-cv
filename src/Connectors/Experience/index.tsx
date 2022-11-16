import { FC, useState } from 'react'
import { useAppSelector } from '../hooks'
import { inputStyles } from './styles'
import { SingleExperience } from './SingleExperience'
import { ExperienceType } from '../../Reducers/Experience/types'

const Experience: FC = () => {
  const experienceInformations = useAppSelector(({ exp }) => exp.exp)

  const [experience, ] = useState<ExperienceType[]>(experienceInformations)

  return (
    <div style={inputStyles}>
      {experience?.map((item: ExperienceType, index: number) => (
          <SingleExperience item={item} index={index} key={`${item.title}`}/>
        ))}
    </div>
  )
}

export default Experience
