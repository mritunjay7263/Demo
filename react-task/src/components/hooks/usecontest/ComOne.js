import React, { createContext } from 'react';
import ComThree from './ComThree';
const firstName = createContext();

const ComOne = () => {
  
  return (
    <>
      <firstName.Provider value="Ram">
        <ComThree/>
      </firstName.Provider>
    </>
  )
}

export default ComOne;
export { firstName }
