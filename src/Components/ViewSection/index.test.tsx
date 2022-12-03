import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import ViewSection, { viewSectionTestId, printSectionTestId } from '.'
import { store } from '../../store'
import { Provider } from 'react-redux'

describe('tests for fullDocument component', () => {
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
  test('should render full document', () => {
    render(
      <Provider store={store}>
        <ViewSection />
      </Provider>
    )
    expect(screen.getByTestId(viewSectionTestId)).toBeInTheDocument()
    expect(screen.getByTestId(printSectionTestId)).toBeInTheDocument()
  })
})
