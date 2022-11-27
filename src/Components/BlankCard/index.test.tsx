import React from 'react'
import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import BlankCard, { blankCardTestId } from '.'
import { store } from '../../store'
import { Provider } from 'react-redux'

describe('tests for blankCard component', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    })
  })
  test('should render blank Card', () => {
    render(
      <Provider store={store}>
        <BlankCard />
      </Provider>
    )
    expect(screen.getByTestId(blankCardTestId)).toBeInTheDocument()
  })
})
