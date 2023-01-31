import { Button } from 'antd'
import { useCallback, useEffect, useState } from 'react'
import { useAppSelector } from '../hooks'
import { inputStyles } from './styles'
import { SingleSkill } from './SingleSkill'
import { PlusOutlined } from '@ant-design/icons'

const Skills: React.FC = () => {
  const skillsInformation = useAppSelector(({ skills }) => skills.skills)
  const [skills, setSkills] = useState<string[]>(skillsInformation)

  const addNewItem = useCallback(() => {
    const newSkills: string[] = skills
    newSkills.push('')
    setSkills(newSkills)
  }, [skills])

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('reload')
  }, [skills])

  //repair adding and implement max-numbers
  //add removing and implement min-numbers
  return (
    <div style={inputStyles}>
      {skills.map((item: string, index: number) => (
        <SingleSkill title={item} index={index} key={`${item}${index}`} />
      ))}
      Add item:{' '}
      <Button type='primary'>
        <PlusOutlined onClick={addNewItem} />
      </Button>
    </div>
  )
}

export default Skills
