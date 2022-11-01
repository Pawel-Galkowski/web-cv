import { FC, useCallback } from 'react'
import { Collapse } from 'antd'

const { Panel } = Collapse

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

const Navigation: FC = () => {
  const onChange = useCallback((key: string | string[]) => {
    // eslint-disable-next-line no-console
    console.log(key)
  }, [])
  return (
    <nav style={{ maxWidth: '350px', minWidth: '300px' }}>
      CV Informations
      <Collapse defaultActiveKey={['1']} onChange={onChange}>
        <Panel header='Dodaj zdjecie' key='1'>
          <p>{text}</p>
        </Panel>
        <Panel header='Dane Personalne' key='2'>
          <p>{text}</p>
        </Panel>
        <Panel header='Social Media' key='3'>
          <p>{text}</p>
        </Panel>
        <Panel header='Wykształcenie' key='4'>
          <p>{text}</p>
        </Panel>
        <Panel header='Bio' key='5'>
          <p>{text}</p>
        </Panel>
        <Panel header='Doświadczenie' key='6'>
          <p>{text}</p>
        </Panel>
        <Panel header='Languages' key='7'>
          <p>{text}</p>
        </Panel>
        <Panel header='Skills' key='8'>
          <p>{text}</p>
        </Panel>
        <Panel header='Atuty' key='9'>
          <p>{text}</p>
        </Panel>
        <Panel header='Zainteresowania' key='10'>
          <p>{text}</p>
        </Panel>
        <Panel header='Kursy i certyfikaty' key='11'>
          <p>{text}</p>
        </Panel>
        <Panel header='Rodo' key='12'>
          <p>{text}</p>
        </Panel>
      </Collapse>
    </nav>
  )
}

export default Navigation
