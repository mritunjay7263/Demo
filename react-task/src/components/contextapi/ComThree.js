import React, { useContext } from 'react'
import { BioData } from './ComOne';

const ComThree = () => {
  const studentName = useContext(BioData);
  return (
    <div>
      <h1>Hello com 3 {studentName}</h1>
    </div>
  )
}

export default ComThree
