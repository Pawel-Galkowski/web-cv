import { Input } from 'antd'
import { ChangeEvent, FC, useCallback, useState } from 'react'
import { LanguageType } from '../../Reducers/Languages/types'
import { useAppDispatch } from '../hooks'

interface Props {
  item: LanguageType
  index: number
}

export const SingleLanguage: FC<Props> = ({ item, index }) => {
  const [language, setLanguage] = useState<LanguageType>(item)

  const dispatch = useAppDispatch()

  const onValueChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      const newItem = {
        ...language,
        [target.name.toLowerCase()]: target.value,
      }
      setLanguage(newItem)
      dispatch({
        type: 'SET_LANGUAGES',
        payload: {
          ...newItem,
          index,
        },
      })
    },
    [language]
  )

  return (
    <div style={{ margin: '0 0 10px 0' }}>
      <Input
        value={language.title}
        name='Title'
        onChange={onValueChange}
      />
      <Input
        value={language.level}
        name='Level'
        onChange={onValueChange}
      />
    </div>
  )
}
