import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { sendDataGetNextPrompt } from '../apis/chatGPT'

interface ParagrahChoices {
  paragraph: string
  choices: string[]
}

const initialState = {
  paragraph: ``,
  choices: ['1.', '2.', '3.', '4.'],
} as ParagrahChoices

export const postDataAndGetPrompt = createAsyncThunk(
  'message/postDataAndGetPrompt',
  async (message: string) => {
    const response = await sendDataGetNextPrompt(message)

    const paragraphChoices = {
      ...initialState,
      paragraph: getParagraph(response),
      choices: getChoices(response),
    }
    return paragraphChoices
  }
)

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(postDataAndGetPrompt.fulfilled, (state, action) => {
      return action.payload
    }),
})

export default messageSlice.reducer

function getParagraph(messageIncoming: string) {
  const searchNumOne = '1.'
  const index = messageIncoming.indexOf(searchNumOne)
  const paragraph = messageIncoming.substring(0, index)

  return paragraph
}

function getChoices(messageIncoming: string): string[] {
  const newState = []

  for (let i = 1; i <= 4; i++) {
    const optionIndex = messageIncoming.indexOf(`${i}.`)
    const optionEndIndex = messageIncoming.indexOf(`${i + 1}.`)
    const choice =
      optionEndIndex !== -1
        ? messageIncoming.substring(optionIndex, optionEndIndex).trim()
        : messageIncoming.substring(optionIndex).trim()
    newState.push(choice)
  }

  return newState
}
