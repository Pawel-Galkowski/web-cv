import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import { ContactItem, contactItemTestId } from '.'
import { store } from '../../store'
import { Provider } from 'react-redux'
import { FundProjectionScreenOutlined } from '@ant-design/icons'

const options = {
    icon: <FundProjectionScreenOutlined />,
    name: 'Lorem Ipsum',
}

describe('tests for contact item component', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    })
  })


  test('should render basic contact item', () => {
    render(
      <Provider store={store}>
        <ContactItem {...options} />
      </Provider>
    )

    expect(screen.getByTestId(contactItemTestId)).toBeInTheDocument()
    expect(screen.getByText(options.name)).toBeInTheDocument()
  })
})
