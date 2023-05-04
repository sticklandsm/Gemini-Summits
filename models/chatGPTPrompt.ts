

export interface ChatGPTSendData {
  model: string
  messages: ChatGPTPrompt[]
}

export interface ChatGPTPrompt {
  role: string
  content: string
}
