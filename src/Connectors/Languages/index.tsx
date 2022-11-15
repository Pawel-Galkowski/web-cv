import { FC, useState } from 'react'
import { useAppSelector } from '../hooks'
import { inputStyles } from './styles'
import { LanguageType } from '../../Reducers/Languages/types'
import { SingleLanguage } from './SingleLanguage'

const Languages: FC = () => {
  const languagesInformations = useAppSelector(
    ({ languages }) => languages.lang
  )

  const [languages, ] = useState<LanguageType[]>(languagesInformations)

  // [{level: '', title: ''}, {level: '', title: ''}]

  return (
    <div style={inputStyles}>
      {languages &&
        languages.map((item: LanguageType, index: number) => (
          <SingleLanguage item={item} index={index} key={`${item.title}${item.level}`}/>
        ))}
    </div>
  )
}

export default Languages
