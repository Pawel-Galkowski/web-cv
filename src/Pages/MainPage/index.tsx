import { centerStyles, appStyles } from './styles'
import { ViewSection, Navigation } from '../../Components'

export const mainPageTestId = 'mainPage-testId'

const MainPage: React.FC = () => (
  <main style={appStyles} data-testid={mainPageTestId}>
    <div style={centerStyles}>
      <ViewSection />
      <Navigation />
    </div>
  </main>
)

export default MainPage
