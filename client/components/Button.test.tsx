import { screen, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../store'

import Button from './Button'

test('button includes submit', () => {
  render(
    <Provider store={store}>
      <Button text="Submit Button" />
    </Provider>
  )
  const button = screen.getByRole('button')
  expect(button.innerHTML).toMatch(/submit/i)
})

test('page header includes the correct test regarless of casing', () => {
  render(
    <Provider store={store}>
      <Button text="Submit Button" />
    </Provider>
  )
  const button = screen.getByRole('button')
  expect(button.innerHTML).toMatch(/BUtton/i)
})

test('Page renders abutton HTML tag', () => {
  render(
    <Provider store={store}>
      <Button text="Submit Button" />
    </Provider>
  )
  const button = screen.getByRole('button')

  expect(button.tagName).toBe('BUTTON')
})
