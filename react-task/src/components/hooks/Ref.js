import React, { useRef, useState } from 'react'

const Ref = () => {
    const refElement = useRef('');
    let [name, setName] = useState('Amit');
    
    console.log(refElement)
    function resetHandler(){
        setName('');
        refElement.current.focus()
        //console.log(name)
    }
    let inputHandler = () => {
        refElement.current.style.color = 'blue';
        refElement.current.value = 'Ram';
    }

    return (
        <>
            <h1>Learning UseRef</h1>
            <input ref={refElement} type='text' value={name} onChange={(e)=>setName(e.target.value)} />
            <button onClick={resetHandler}>Reset</button>
            <button onClick={inputHandler}>handle input</button>
        </>
    )
}

export default Ref
