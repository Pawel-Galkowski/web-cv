import {
  AimOutlined,
  CarOutlined,
  FundProjectionScreenOutlined,
  FireOutlined,
  PlayCircleFilled,
  UserOutlined,
} from '@ant-design/icons'

const icons = [
  {
    name: 'AimOutlined',
    testId: 'AimOutlined-testid',
    component: <AimOutlined data-testid='AimOutlined-testid' />,
  },
  {
    name: 'CarOutlined',
    testId: 'CarOutlined-testid',
    component: <CarOutlined data-testid='CarOutlined-testid'/>,
  },
  {
    name: 'FundProjectionScreenOutlined',
    testId: 'FundProjectionScreenOutlined-testid',
    component: <FundProjectionScreenOutlined data-testid='FundProjectionScreenOutlined-testid'/>,
  },
  {
    name: 'FireOutlined',
    testId: 'FireOutlined-testid',
    component: <FireOutlined data-testid='FireOutlined-testid'/>,
  },
  {
    name: 'PlayCircleFilled',
    testId: 'PlayCircleFilled-testid',
    component: <PlayCircleFilled style={{ color: 'blue' }} data-testid='PlayCircleFilled-testid'/>,
  },
  {
    name: 'UserOutlined',
    testId: 'UserOutlined-testid',
    component: <UserOutlined data-testid='UserOutlined-testid'/>,
  },
]

export const findIconComponent = (icon: string): JSX.Element | undefined => icons.find(({name}) => icon === name)?.component
export const findIconTestId = (icon: string): string | undefined => icons.find(({name}) => icon === name)?.testId
