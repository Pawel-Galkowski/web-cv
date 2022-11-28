import { centerStyles, appStyles } from './styles'
import { ViewSection, Navigation } from '../../Components'

const MainPage: React.FC = () => (
  <main style={appStyles}>
    <div style={centerStyles}>
      <ViewSection />
      <Navigation />
    </div>
  </main>
)

export default MainPage
