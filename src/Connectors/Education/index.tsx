import { FC, useState } from 'react'
import { useAppSelector } from '../hooks'
import { inputStyles } from './styles'
import { SingleEducation } from './SingleEducation'
import { EducationType } from '../../Reducers/Education/types'

const Education: FC = () => {
  const educationInformations = useAppSelector(({ edu }) => edu.edu)

  const [education, ] = useState<EducationType[]>(educationInformations)

  return (
    <div style={inputStyles}>
      {education?.map((item: EducationType, index: number) => (
          <SingleEducation item={item} index={index} key={`${item.title}`}/>
        ))}
    </div>
  )
}

export default Education
