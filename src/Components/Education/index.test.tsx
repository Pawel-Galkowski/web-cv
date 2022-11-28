import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import Education, { educationTestId, dateTestId, locationTestId } from '.'
import { store } from '../../store'
import { Provider } from 'react-redux'

const options = {
  title: 'Lorem Ipsum',
  project: 'Web app',
  school: 'University',
  from: '2020',
  location: 'Warsaw',
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
        <Education {...options} />
      </Provider>
    )

    expect(screen.getByTestId(educationTestId)).toBeInTheDocument()
    const titleElement: HTMLElement = screen.getByText(options.title)
    expect(titleElement).toBeInTheDocument()
    expect(titleElement).toHaveTextContent(options.title)
    const projectElement: HTMLElement = screen.getByText(options.project)
    expect(projectElement).toBeInTheDocument()
    expect(projectElement).toHaveTextContent(options.project)
    const schoolElement: HTMLElement = screen.getByText(options.school)
    expect(schoolElement).toBeInTheDocument()
    expect(schoolElement).toHaveTextContent(options.school)
    const fromElement: HTMLElement = screen.getByTestId(dateTestId)
    expect(fromElement).toBeInTheDocument()
    expect(fromElement).toHaveTextContent(`${options.from} -`)
    const locationElement: HTMLElement = screen.getByTestId(locationTestId)
    expect(locationElement).toBeInTheDocument()
    expect(locationElement).toHaveTextContent(options.location)
  })

  test('should render basic contact item with present status', () => {
    render(
      <Provider store={store}>
        <Education {...options} isPresent />
      </Provider>
    )

    expect(screen.getByTestId(educationTestId)).toBeInTheDocument()
    const fromElement: HTMLElement = screen.getByTestId(dateTestId)
    expect(fromElement).toBeInTheDocument()
    expect(fromElement).toHaveTextContent(`${options.from} - Present`)
  })

  test('should render basic contact item with finish date', () => {
    const finishDate = '12/2021'
    render(
      <Provider store={store}>
        <Education {...options} to={finishDate} />
      </Provider>
    )

    expect(screen.getByTestId(educationTestId)).toBeInTheDocument()
    const fromElement: HTMLElement = screen.getByTestId(dateTestId)
    expect(fromElement).toBeInTheDocument()
    expect(fromElement).toHaveTextContent(`${options.from} - ${finishDate}`)
  })
})
