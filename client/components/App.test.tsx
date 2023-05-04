import { screen, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../store'

import App from './App'

test('page header includes detevtice', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  const heading = screen.getByRole('heading', { level: 1 })
  expect(heading.innerHTML).toMatch(/detective/)
})

test('page header includes You', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  const heading = screen.getByRole('heading', { level: 1 })
  expect(heading.innerHTML).toMatch(/you/i)
})

test('page header includes a H1', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  const heading = screen.getByRole('heading', { level: 1 })
  expect(heading.tagName).toBe('H1')
})
