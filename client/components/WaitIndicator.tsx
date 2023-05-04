import { useAppSelector } from '../hooks'

export default function WaitIndicator() {
  const waiting = useAppSelector((state) => state.waiting)
  return waiting ? (
    <div className="container center">
      <img
        className="wait-indicator"
        src="/animated-circle.gif"
        alt="loading"
      />
    </div>
  ) : null
}
