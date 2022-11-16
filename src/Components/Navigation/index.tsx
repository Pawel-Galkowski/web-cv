import { Collapse } from 'antd'
import {
  About,
  Bio,
  Languages,
  Skills,
  SocialMedia,
  Hobby,
} from '../../Connectors'

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
      <Panel header='Photo' key='1' collapsible='disabled'>
        <p>{text}</p>
      </Panel>
      <Panel header='Personal data' key='2'>
        <About />
      </Panel>
      <Panel header='Bio' key='3'>
        <Bio />
      </Panel>
      <Panel header='Social Media' key='4'>
        <SocialMedia />
      </Panel>
      <Panel header='Experience' key='5'>
        <p>{text}</p>
      </Panel>
      <Panel header='Education' key='6'>
        <p>{text}</p>
      </Panel>
      <Panel header='Languages' key='7'>
        <Languages />
      </Panel>
      <Panel header='Skills' key='8'>
        <Skills />
      </Panel>
      <Panel header='Additional' key='9' collapsible='disabled'>
        <p>{text}</p>
      </Panel>
      <Panel header='Hobby' key='10'>
        <Hobby />
      </Panel>
      <Panel header='Certification' key='11' collapsible='disabled'>
        <p>{text}</p>
      </Panel>
      <Panel header='Rodo' key='12' collapsible='disabled'>
        <p>{text}</p>
      </Panel>
    </Collapse>
  </nav>
)

export default Navigation
