import React from 'react'

const SythenticEvent = () => {
    const onclickHandler = () => {
        setTimeout(()=>{
            console.log("sjks")
        }, 500)
    }

    return (
        <>
            <div onClick={()=>onclickHandler()}>Click Button</div>
        </>
    )
}

export default SythenticEvent
