import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { postDataAndGetPrompt } from '../slices/message'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

function Story({ children }: Props) {
  const paragraph = useAppSelector((state) => state.message.paragraph)
  const isLoading = useAppSelector((state) => state.waiting)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(postDataAndGetPrompt(''))
  }, [])

  return (
    <>
      <div className="container">
        <div>{children}</div>
        {!isLoading && <h2>{paragraph}</h2>}
      </div>
    </>
  )
}

export default Story
