import React, { useState } from 'react'

const Child = (props) => {
    let [name, setName] = useState('')
    //console.log(data)
    //console.log(props2(newData))

    let submitHandler = (e) => {
        e.preventDefault()
        props.getData(name)
        //setName('')
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default Child
