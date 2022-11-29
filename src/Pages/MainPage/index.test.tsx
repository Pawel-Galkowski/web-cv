import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import MainPage, { mainPageTestId } from '.'
import { store } from '../../store'
import { Provider } from 'react-redux'

describe('tests for SingleHobby component', () => {
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
  test('should render component', () => {
    render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    )

    expect(screen.getByTestId(mainPageTestId)).toBeInTheDocument()
  })
})
