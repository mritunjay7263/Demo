import React, { useState } from 'react'
import BottomInput from './BottomInput'
// How to pass deta from child to parent

const TopDiv = () => {
    const [UIcolor, setUIcolor] = useState(null);
    
    const getColor = (color) => {
        setUIcolor(color)
    }

  return (
    <>
      <div className='app-container'>
        <div className='' style={{ background: `${UIcolor}`, height:'50px' }}></div>
        <BottomInput getColor={getColor} />
      </div>
    </>
  )
}

export default TopDiv


