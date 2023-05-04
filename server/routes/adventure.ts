import express from 'express'
import request from 'superagent'
import dotenv from 'dotenv'
import { ChatGPTSendData } from '../../models/chatGPTPrompt'
dotenv.config()

const router = express.Router()

const objectToSend: ChatGPTSendData = {
  model: 'gpt-3.5-turbo',
  messages: [],
}

const apiKey = process.env.GPT_API_KEY

router.get('/', (req, res) => {})

router.post('/', async (req, res) => {
  try {
    objectToSend.messages.push(req.body)

    const response = await request
      .post('https://api.openai.com/v1/chat/completions')
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${apiKey}`)
      .send(objectToSend)

    const chatGptResponsePrompt = response.body.choices[0].message
    objectToSend.messages.push(chatGptResponsePrompt)

    res.json(chatGptResponsePrompt)
  } catch (error) {
    console.error('error sending on the back end:', error)
  }
})

export default router
