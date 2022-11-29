import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import { SectionTitle, sectionTitleTestId } from '.'
import { store } from '../../store'
import { Provider } from 'react-redux'

describe('tests for title component', () => {
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
  test('should render component', async () => {
    const title = 'Lorem Ipsum'
    render(
      <Provider store={store}>
        <SectionTitle title={title} />
      </Provider>
    )

    const titleElement: HTMLElement = screen.getByTestId(sectionTitleTestId)
    expect(titleElement).toBeInTheDocument()
    expect(titleElement).toHaveTextContent(title)
  })
})
