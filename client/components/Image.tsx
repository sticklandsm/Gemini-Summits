interface Props {
  image: string
}

function Image(props: Props) {
  return (
    <div className="container">
      <img className="container grid entrence" src={props.image} alt="" />
    </div>
  )
}

export default Image
