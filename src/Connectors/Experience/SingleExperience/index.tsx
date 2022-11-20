/* eslint-disable no-console */
import { Checkbox, Divider, Input } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import { ChangeEvent, FC, FormEvent, useCallback, useState } from 'react'
import { useAppDispatch } from '../../hooks'
import { Props } from './types'
import { ExperienceType } from '../../../Reducers/Experience/types'
import { lineStyles } from './styles'

export const SingleExperience: FC<Props> = ({ item, index }) => {
  const [experience, setExperience] = useState<ExperienceType>(item)

  const dispatch = useAppDispatch()

  const onValueChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const newItem = {
        ...experience,
        [target.name.toLowerCase()]: target.value,
      }
      setExperience(newItem)
      dispatch({
        type: 'SET_EXPERIENCE',
        payload: {
          ...newItem,
          index,
        },
      })
    },
    [experience]
  )

  const onChange = useCallback(
    ({ target }: CheckboxChangeEvent) => {
      const newItem = {
        ...experience,
        isPresent: target.checked,
      }
      setExperience(newItem)
      dispatch({
        type: 'SET_EXPERIENCE',
        payload: {
          ...newItem,
          index,
        },
      })
    },
    [experience]
  )

  const onDataChange = useCallback(
    (event: FormEvent<HTMLDivElement>) => {
      const target = event.target as HTMLElement
      const oldList = target.getElementsByTagName('li')
      const list: HTMLElement[] = Array.prototype.slice.call(oldList)
      const newList: string[] = list.map((item: HTMLElement) => item.innerText)
      const newItem = {
        ...experience,
        data: newList || target.innerText,
      }
      setExperience(newItem)
      dispatch({
        type: 'SET_EXPERIENCE',
        payload: {
          ...newItem,
          index,
        },
      })
    },
    [experience]
  )

  return (
    <div style={{ margin: '0 0 10px 0' }}>
      <label>Title: </label>
      <Input value={experience.title} name='Title' onChange={onValueChange} />
      <label>Company: </label>
      <Input
        value={experience.company}
        name='Company'
        onChange={onValueChange}
      />
      <label>Description: </label>
      <Input
        value={experience.description}
        name='Description'
        onChange={onValueChange}
      />
      <label>Time: </label>
      <div style={lineStyles}>
        <Input value={experience.from} name='From' onChange={onValueChange} />
        <Input
          value={experience.to}
          name='To'
          onChange={onValueChange}
          disabled={!!experience.isPresent}
        />
      </div>
      <Checkbox checked={experience.isPresent} onChange={onChange}>
        Is Current?
      </Checkbox>
      <br />
      <label>Location: </label>
      <Input
        value={experience.location}
        name='Location'
        onChange={onValueChange}
      />
      <label>Responsibilities: </label>
      <div
        className='ant-input'
        contentEditable
        onInput={onDataChange}
        suppressContentEditableWarning={true}
      >
        <ul>
        {experience?.data.length > 1
          ? experience.data.map((item: string, index: number) => (
              <li key={`${item}${index}`} style={{display: 'block', marginBottom: '2px'}}>{item}</li>
            )) // need to repair content editable
          : experience.data} 
        </ul>
      </div>
      <Divider />
    </div>
  )
}