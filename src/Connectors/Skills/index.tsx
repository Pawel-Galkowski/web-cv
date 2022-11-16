import { FC, useState } from 'react'
import { useAppSelector } from '../hooks'
import { inputStyles } from './styles'
import { SingleSkill } from './SingleSkill'

const Skills: FC = () => {
  const skillsInformation = useAppSelector(({ skills }) => skills.skills)

  const [skills, ] = useState<string[]>(skillsInformation)

  return (
    <div style={inputStyles}>
      {skills?.map((item: string, index: number) => (
        <SingleSkill title={item} index={index} key={`${item}${index}`} />
      ))}
    </div>
  )
}

export default Skills

