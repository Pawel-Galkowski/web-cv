import { Input } from 'antd'
import { ChangeEvent, FC, useCallback, useState } from 'react'
import { useAppDispatch } from '../hooks'

interface Props {
  item: string
  index: number
}

export const SingleSkill: FC<Props> = ({ item, index }) => {
  const [skills, setSkills] = useState<string>(item)

  const dispatch = useAppDispatch()

  const onValueChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      setSkills(target.value)
      dispatch({
        type: 'SET_SKILLS',
        payload: {
          title: target.value,
          index,
        },
      })
    },
    [skills]
  )

  return (
    <div style={{ margin: '0 0 5px 0' }}>
      <Input value={skills} onChange={onValueChange} />
    </div>
  )
}
