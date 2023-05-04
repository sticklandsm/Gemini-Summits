import reducer from './message'

test('calling reducer adds a string to the state', () => {
  const state = reducer(
    {
      paragraph: ``,
      choices: ['1.', '2.', '3.', '4.'],
    },
    {
      type: 'message/postDataAndGetPrompt/fulfilled',
      payload: 'Test Message 1. First 2. Second',
    }
  )

  expect(state).toBe('Test Message 1. First 2. Second')
  expect(state).toContain('Test')
})

test('calling reducer adds a string with the same length as the payload', () => {
  const state = reducer(
    {
      paragraph: ``,
      choices: ['1.', '2.', '3.', '4.'],
    },
    {
      type: 'message/postDataAndGetPrompt/fulfilled',
      payload: 'Test Message 1. First 2. Second',
    }
  )
  expect(state).toHaveLength(31)
})

test('calling reducer adds to the state', () => {
  const state = reducer(
    {
      paragraph: ``,
      choices: ['1.', '2.', '3.', '4.'],
    },
    {
      type: 'message/postDataAndGetPrompt/fulfilled',
      payload: 'Text Test',
    }
  )

  expect(state).toBe('Text Test')
  expect(state).toContain('Text')
  expect(state).toHaveLength(9)
})
