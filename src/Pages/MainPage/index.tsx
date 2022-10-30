import { AppStyles } from "./styles";
import { BlankCard, Navigation } from "../../Components";
import 'antd/dist/antd.css';

const MainPage: React.FC = () => (
  <div style={AppStyles}>
    <BlankCard />
    <Navigation />
  </div>
);

export default MainPage;

2