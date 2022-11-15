import { Collapse } from 'antd'
import { About, Bio, Languages, SocialMedia } from '../../Connectors'

const { Panel } = Collapse

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

const Navigation: React.FC = () => (
  <nav style={{ maxWidth: '350px', minWidth: '300px' }}>
    CV Informations
    <Collapse defaultActiveKey={['2']}>
      <Panel header='Dodaj zdjecie' key='1' collapsible='disabled'>
        <p>{text}</p>
      </Panel>
      <Panel header='Dane Personalne' key='2'>
        <About />
      </Panel>
      <Panel header='Bio' key='3'>
        <Bio />
      </Panel>
      <Panel header='Social Media' key='4'>
        <SocialMedia />
      </Panel>
      <Panel header='Wykształcenie' key='5'>
        <p>{text}</p>
      </Panel>
      <Panel header='Doświadczenie' key='6'>
        <p>{text}</p>
      </Panel>
      <Panel header='Languages' key='7'>
        <Languages />
      </Panel>
      <Panel header='Skills' key='8'>
        <p>{text}</p>
      </Panel>
      <Panel header='Atuty' key='9' collapsible='disabled'>
        <p>{text}</p>
      </Panel>
      <Panel header='Zainteresowania' key='10'>
        <p>{text}</p>
      </Panel>
      <Panel header='Kursy i certyfikaty' key='11' collapsible='disabled'>
        <p>{text}</p>
      </Panel>
      <Panel header='Rodo' key='12' collapsible='disabled'>
        <p>{text}</p>
      </Panel>
    </Collapse>
  </nav>
)

export default Navigation
