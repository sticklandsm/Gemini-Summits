import { screen, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../store'

import Story from './Story'

test('page header initialises with no text', () => {
  render(
    <Provider store={store}>
      <Story />
    </Provider>
  )
  const header = screen.getByRole('heading', { level: 2 })
  expect(header.innerHTML).toMatch('')
})

test('page header is an h2', () => {
  render(
    <Provider store={store}>
      <Story />
    </Provider>
  )
  const header = screen.getByRole('heading', { level: 2 })
  expect(header.tagName).toBe('H2')
})
