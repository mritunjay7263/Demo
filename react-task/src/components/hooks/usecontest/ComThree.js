import React, { useContext } from 'react'
import { firstName } from './ComOne'

const ComThree = () => {
  const first = useContext(firstName)
  return (
    <>
      {first}
    </>
  )
}

export default ComThree
