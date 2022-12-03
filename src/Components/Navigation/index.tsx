import { DownloadOutlined } from '@ant-design/icons'
import { Button, Collapse, Typography } from 'antd'
import {
  About,
  Bio,
  Languages,
  Skills,
  SocialMedia,
  Hobby,
  Education,
  Experience,
} from '../../Connectors'
import { navigationBaseStyles } from './styles'
import { printDocument } from '../../Components/ViewSection'

const { Panel } = Collapse

export const defaultText = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

export const navigationTestId = 'navigation-testId'
export const collapseComponentTestId = 'collapseComponent-testId'

const Navigation: React.FC = () => (
  <nav style={navigationBaseStyles} data-testid={navigationTestId}>
    <Typography.Title level={2}>CV Informations</Typography.Title>
    <Collapse defaultActiveKey={['2']}>
      <Panel header='Photo' key='1' collapsible='disabled'>
        <p>{defaultText}</p>
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
        <Experience />
      </Panel>
      <Panel header='Education' key='6'>
        <Education />
      </Panel>
      <Panel header='Languages' key='7'>
        <Languages />
      </Panel>
      <Panel header='Skills' key='8'>
        <Skills />
      </Panel>
      <Panel header='Additional' key='9' collapsible='disabled'>
        <p>{defaultText}</p>
      </Panel>
      <Panel header='Hobby' key='10'>
        <Hobby />
      </Panel>
      <Panel header='Certification' key='11' collapsible='disabled'>
        <p>{defaultText}</p>
      </Panel>
      <Panel header='Rodo' key='12' collapsible='disabled'>
        <p>{defaultText}</p>
      </Panel>
    </Collapse>
    <Button type='primary' icon={<DownloadOutlined />} size='large' onClick={printDocument}>
      Download
    </Button>
  </nav>
)

export default Navigation
