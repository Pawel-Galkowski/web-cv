import { FC, useState, useCallback } from 'react'
import { Input } from 'antd'
import { useAppSelector, useAppDispatch } from '../hooks'
import { inputStyles } from './styles'
import { LanguageType } from '../../Reducers/Languages/types'

const Languages: FC = () => {
  const languagesInformations = useAppSelector(
    ({ languages }) => languages.lang
  )
  const dispatch = useAppDispatch()

  const [languages, setLanguages] = useState<LanguageType[]>(
    languagesInformations
  )

  const onValueChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setLanguages((languages) => [])
      //   ...languages,
      //   [target.key]: {
      //     [target.name.toLowerCase()]: target.value,
      //   }
      // )
      dispatch({
        type: `SET_LANGUAGES`,
        payload: languages,
      })
    },
    [languages]
  )

  return (
    <div style={inputStyles}>
      {languages.map((item: LanguageType, index: number) => (
        <div
          style={{ margin: '0 0 10px 0' }}
          key={`${item.title}${item.level}`}
        >
          <Input
            value={item.title}
            name='Title'
            key={index}
            onChange={onValueChange}
          />
          <Input
            value={item.level}
            name='Level'
            key={index}
            onChange={onValueChange}
          />
        </div>
      ))}
    </div>
  )
}

export default Languages
