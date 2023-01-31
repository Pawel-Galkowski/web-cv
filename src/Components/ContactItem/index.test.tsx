import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import { ContactItem, contactInformationTestId, contactItemTestId, contactLinkTestId } from '.'
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


  test('should render basic contact item with information', () => {
    render(
      <Provider store={store}>
        <ContactItem {...options} />
      </Provider>
    )

    expect(screen.getByTestId(contactItemTestId)).toBeInTheDocument()
    expect(screen.queryByTestId(contactLinkTestId)).not.toBeInTheDocument()
    expect(screen.getByTestId(contactInformationTestId)).toBeInTheDocument()
    expect(screen.getByText(options.name)).toBeInTheDocument()
  })

  test('should render basic contact item with link', () => {
    render(
      <Provider store={store}>
        <ContactItem {...options} link='https://google.com'/>
      </Provider>
    )

    expect(screen.getByTestId(contactItemTestId)).toBeInTheDocument()
    expect(screen.queryByTestId(contactInformationTestId)).not.toBeInTheDocument()
    expect(screen.getByTestId(contactLinkTestId)).toBeInTheDocument()
    expect(screen.getByText(options.name)).toBeInTheDocument()
  })
})
