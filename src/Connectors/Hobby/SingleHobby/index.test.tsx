import { fireEvent, render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import { SingleHobby, singleHobbyTestId } from '.'
import { store } from '../../../store'
import { Provider } from 'react-redux'
import { findIconTestId } from '../../../Icons'

const config = {
  icon: 'AimOutlined',
  title: 'E-Sport',
}

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
    const newValue = 'Good Day';
    render(
      <Provider store={store}>
        <SingleHobby item={config} index={1} />
      </Provider>
    )

    const iconTestId: string | undefined = findIconTestId(config.icon)
    expect(screen.getByTestId(singleHobbyTestId)).toBeInTheDocument()
    expect(screen.getByTestId(iconTestId as string)).toBeInTheDocument()

    const inputElement = screen.getByDisplayValue(config.title)
    expect(inputElement).toBeInTheDocument()
    
    fireEvent.change(inputElement, {target: {value: newValue}})
    expect(inputElement).toHaveValue(newValue)
  })
})
