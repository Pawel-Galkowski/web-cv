import { FC } from 'react'
import { SectionTitle } from '../../Components/SectionTitle'
import { StyledTag } from './styles'
import { useAppSelector } from '../../Connectors/hooks'
import { v4 as uuidv4 } from 'uuid'

interface CustomTag {
  title: string
}

const CustomTag: FC<CustomTag> = ({ title }): JSX.Element => (
  <StyledTag>{title}</StyledTag>
)

export const Skills: FC = (): JSX.Element => {
  const skillsInformation = useAppSelector<string[]>(
    ({ skills }) => skills.skills
  )
  return (
    <>
      <SectionTitle title='Skills' />
      {skillsInformation?.map((item: string)=> <CustomTag title={item} key={uuidv4()}/>)}
    </>
  )
}
