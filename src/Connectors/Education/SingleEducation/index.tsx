import { Input } from 'antd'
import { ChangeEvent, FC, useCallback, useState } from 'react'
import { useAppDispatch } from '../../hooks'
import { Props } from './types'
import { EducationType } from '../../../Reducers/Education/types'
import { lineStyles } from './styles'

export const SingleEducation: FC<Props> = ({ item, index }) => {
  const [education, setEducation] = useState<EducationType>(item)

  const dispatch = useAppDispatch()

  const onValueChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const newItem = {
        ...education,
        [target.name.toLowerCase()]: target.value,
      }
      setEducation(newItem)
      dispatch({
        type: 'SET_EDUCATION',
        payload: {
          ...newItem,
          index,
        },
      })
    },
    [education]
  )

  return (
    <div style={{ margin: '0 0 10px 0' }}>
      <Input value={education.title} name='Title' onChange={onValueChange} />
      <Input value={education.school} name='School' onChange={onValueChange} />
      <div style={lineStyles}>
        <Input value={education.from} name='From' onChange={onValueChange} />
        <Input value={education.to} name='To' onChange={onValueChange} />
      </div>
      <Input
        value={education.location}
        name='Location'
        onChange={onValueChange}
      />
      <Input.TextArea
        value={education.project}
        name='Project'
        onChange={onValueChange}
      />
    </div>
  )
}
