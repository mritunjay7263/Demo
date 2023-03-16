import React, { useEffect, useState } from 'react'

const LifeCycleUseEffect = () => {
    let [data, setData] = useState(0);
    let [data2, setData2] = useState(0);

    //Component did Mount
        // useEffect(()=>{
        //     console.log('Component did Mount')
        // },[])

        // let submithandler = () => {
        //     setData(data+1)
        // }
    //Component did Mount


    //Component did Update
        // useEffect(()=>{
        //     console.log('Component did Update')
        // },[data2])

        // let submithandler2 = () => {
        //     setData2(data2 + 1)
        // }
    //Component did Update


    //Component will unmounts
    useEffect(()=>{
        console.log('Component will unmounts 2')
        return () => {
            console.log('Component will unmounts 3')
        }
    },[])
    //Component will unmounts
    

  return (
    <>
       {/* <button type='submit' onClick={submithandler}>Submit</button>

       <h1>{data2}</h1> 
       <button type='submit' onClick={submithandler2}>Submit2</button> */}
    </>
  )
}

export default LifeCycleUseEffect
