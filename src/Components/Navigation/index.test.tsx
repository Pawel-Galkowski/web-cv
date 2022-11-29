import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import Navigation, { navigationTestId, defaultText } from '.'
import { store } from '../../store'
import { Provider } from 'react-redux'

describe('tests for navigation component', () => {
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
  test('should render navigation component', async () => {
    render(
      <Provider store={store}>
        <Navigation />
      </Provider>
    )

    const navElement: HTMLElement = screen.getByTestId(navigationTestId)
    expect(navElement).toBeInTheDocument()
    expect(navElement).toHaveTextContent('CV Informations')

    expect(screen.getByText('Experience')).toBeInTheDocument()
    expect(screen.getByText('Additional')).toBeInTheDocument()
    expect(screen.queryByText(defaultText)).not.toBeInTheDocument()

    // await userEvent.click(screen.getByText('Additional'))

    // const defaultTextElement: HTMLElement = screen.queryByText(defaultText);
    // expect(defaultTextElement).toBeInTheDocument()
  })
})
