import React from 'react'
import Child from './Child'

const Parent = () => {
    let getData = (data) => {
        console.log(data)
    }

    return (
        <>
            <Child getData1={getData} />
        </>
    )
}

export default Parent
