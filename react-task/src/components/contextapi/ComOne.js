import React, { createContext } from 'react';
import ComTwo from './ComTwo'

const BioData = createContext();

const ComOne = () => {
  return (
    <BioData.Provider value={'Amit'}>
        <ComTwo />
    </BioData.Provider>

    // <div>
    //     <ComTwo name='Amit'/>
    // </div>
  )
}

export default ComOne;
export {BioData}
