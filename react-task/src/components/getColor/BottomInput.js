import React, { useState } from 'react'

const BottomInput = ({getColor}) => {
    const [activeColor, setActiveColor] = useState();

    const handleChange = (e) => {
        const {value} = e.target;
        setActiveColor(value);
        getColor(value);
    }

    return (
        <>
            <input type="text" id="input" value={activeColor} onChange={handleChange} />
        </>
    )
}

export default BottomInput
