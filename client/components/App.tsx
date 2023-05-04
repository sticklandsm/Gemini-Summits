import { useEffect, useState } from 'react'
import { options } from 'superagent'
import { sendDataGetNextPrompt } from '../apis/chatGPT'
import { useAppDispatch, useAppSelector } from '../hooks'
import { postDataAndGetPrompt } from '../slices/message'
import Button from './Button'
import Image from './Image'
import Story from './Story'
import WaitIndicator from './WaitIndicator'

function App() {
  const paths = useAppSelector((state) => state.message.choices)

  const [imageUrl, changeImage] = useState('/images/Entrence.png')

  return (
    <>
      <div className="app">
        <div className="container">
          <h1>
            You&apos;re a detective investigating a series of strange
            disappearances in the small town of Gemini Summits, Washington...
          </h1>
        </div>
      </div>
      <div>
        <Story>
          <WaitIndicator />
        </Story>
      </div>
      <div className="container grid">
        {paths.map((path, idx) => (
          <Button key={idx} text={path} changeImage={changeImage} />
        ))}
      </div>
      <Image image={imageUrl} />
    </>
  )
}

export default App
