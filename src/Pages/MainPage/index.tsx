import { centerStyles, appStyles } from './styles'
import { BlankCard, Navigation } from '../../Components'
import 'antd/dist/antd.css'

const MainPage: React.FC = () => (
  <main style={appStyles}>
    <div style={centerStyles}>
      <BlankCard />
      <Navigation />
    </div>
  </main>
)

export default MainPage

2
