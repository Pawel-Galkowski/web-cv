import { FC, useState } from 'react'
import { useAppSelector } from '../hooks'
import { inputStyles } from './styles'
import { SingleHobby } from './SingleHobby'
import { HobbyType } from '../../Reducers/Hobby/types'

const Hobby: FC = () => {
  const hobbyInformations = useAppSelector(
    ({ hobby }) => hobby.hobby
  )

  const [hobby, ] = useState<HobbyType[]>(hobbyInformations)

  return (
    <div style={inputStyles}>
      {hobby?.map((item: HobbyType, index: number) => (
          <SingleHobby item={item} index={index} key={`${item.title}${item.icon}`}/>
        ))}
    </div>
  )
}

export default Hobby
