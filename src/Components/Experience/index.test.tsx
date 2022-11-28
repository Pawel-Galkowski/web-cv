import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import Experience, {
  experienceTestId,
  dateTestId,
  locationTestId,
  workDataTestId,
} from '.'
import { store } from '../../store'
import { Provider } from 'react-redux'

const options = {
  title: 'Engineer',
  company: 'Letraset sheets',
  description: 'Example company description',
  from: '2020',
  location: 'Warsaw',
  data: [
    'Lorem ipsum',
    'dolor sit amet',
    'consectetur adipiscing elit',
    'Etiam lobortis.',
  ],
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
        <Experience {...options} />
      </Provider>
    )

    expect(screen.getByTestId(experienceTestId)).toBeInTheDocument()
    const titleElement: HTMLElement = screen.getByText(options.title)
    expect(titleElement).toBeInTheDocument()
    expect(titleElement).toHaveTextContent(options.title)
    const projectElement: HTMLElement = screen.getByText(options.company)
    expect(projectElement).toBeInTheDocument()
    expect(projectElement).toHaveTextContent(options.company)
    const schoolElement: HTMLElement = screen.getByText(options.description)
    expect(schoolElement).toBeInTheDocument()
    expect(schoolElement).toHaveTextContent(options.description)
    const fromElement: HTMLElement = screen.getByTestId(dateTestId)
    expect(fromElement).toBeInTheDocument()
    expect(fromElement).toHaveTextContent(`${options.from} -`)
    const locationElement: HTMLElement = screen.getByTestId(locationTestId)
    expect(locationElement).toBeInTheDocument()
    expect(locationElement).toHaveTextContent(options.location)
    const dataElement: HTMLElement = screen.getByTestId(workDataTestId)
    expect(dataElement).toBeInTheDocument()
    expect(dataElement).toHaveTextContent(options.data[2])
  })

  test('should render basic contact item with present status', () => {
    render(
      <Provider store={store}>
        <Experience {...options} isPresent />
      </Provider>
    )

    expect(screen.getByTestId(experienceTestId)).toBeInTheDocument()
    const fromElement: HTMLElement = screen.getByTestId(dateTestId)
    expect(fromElement).toBeInTheDocument()
    expect(fromElement).toHaveTextContent(`${options.from} - Present`)
  })

  test('should render basic contact item with finish date', () => {
    const finishDate = '12/2021'
    render(
      <Provider store={store}>
        <Experience {...options} to={finishDate} />
      </Provider>
    )

    expect(screen.getByTestId(experienceTestId)).toBeInTheDocument()
    const fromElement: HTMLElement = screen.getByTestId(dateTestId)
    expect(fromElement).toBeInTheDocument()
    expect(fromElement).toHaveTextContent(`${options.from} - ${finishDate}`)
  })
})
