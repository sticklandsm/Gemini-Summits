import request from 'superagent'
import { ChatGPTSendData, ChatGPTPrompt } from '../../models/chatGPTPrompt'

const rootUrl = '/api/v1/adventure'

let count = 0

export async function sendDataGetNextPrompt(chosenOption: string) {
  const sendObject: ChatGPTPrompt = {
    role: 'user',
    content:
      count === 0
        ? `I'm starting a choose your own adventure game, kind of like the Goosebump books. The first prompt is:
        "You're a detective investigating a series of strange disappearances in a small town in Washington"
      
        Can you give me 4 numbered options with simple choices on what to do next no more than 10 words each. Make it choices the player is making, not just choices on what happens next. Please at some point in the adventure make the player enter a school, a forest, a bar, a diner, a cave, a lake, a mysterious red room with 2 people in chairs, a library, and/or a horse stables.
        Please make the story end after 5 turns with you either dying and waking up at the pearly gates, or finding the missing people.
        `
        : chosenOption +
          `Please provide a paragraph on what happens next, and my 4 choices`,
  }

  const response = await request.post(rootUrl).send(sendObject)

  const nextPrompt: string = response.body.content

  count++
  return nextPrompt
}

//Make it so after 5 choices the character has a 50/50 chance of either dying or solving the case.
