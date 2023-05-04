import { useAppDispatch, useAppSelector } from '../hooks'
import { postDataAndGetPrompt } from '../slices/message'

interface Props {
  text: string
  changeImage: React.Dispatch<React.SetStateAction<string>>
}

function Button(props: Props) {
  const dispatch = useAppDispatch()

  function handleClick(text: string) {
    dispatch(postDataAndGetPrompt(text))
    if (text.toLowerCase().includes('cave')) {
      props.changeImage(() => '/images/cave.jpg')
    }
    if (text.toLowerCase().includes('forest')) {
      props.changeImage(() => '/images/forest.png')
    }
    if (text.toLowerCase().includes('stable')) {
      props.changeImage(() => '/images/Stable.jpg')
    }
    if (text.toLowerCase().includes('bar')) {
      props.changeImage(() => '/images/bar.jpg')
    }
    if (text.toLowerCase().includes('diner')) {
      props.changeImage(() => '/images/diner.jpg')
    }
    if (text.toLowerCase().includes('lake')) {
      props.changeImage(() => '/images/lake.jpg')
    }
    if (text.toLowerCase().includes('red room')) {
      props.changeImage(() => '/images/redRoom.jpg')
    }
    if (
      text.toLowerCase().includes('bodies') ||
      text.toLowerCase().includes('suicide')
    ) {
      props.changeImage(() => '/images/bodies.jpg')
    }
    if (text.toLowerCase().includes('school')) {
      props.changeImage(() => '/images/school.png')
    }
    if (text.toLowerCase().includes('library')) {
      props.changeImage(() => '/images/library.png')
    }
  }

  return <button onClick={() => handleClick(props.text)}>{props.text}</button>
}

export default Button
