import React, { useState } from 'react'

const InputTask = () => {
    const [inputData, setInputData] = useState('')
    const [items, setItems] = useState([])


    // let result = [...items, inputData]
    // for(let i = 1; i <= 10; i++){
    //     let result2 =  i * result
    //     console.log(result2)
    // }
    //setItems([result2])
    
    const submithandler = (e) => {
        e.preventDefault();
        setItems([]);
       
        for(let i = 1; i <= 10; i++){
            let table =  i * inputData;

            setItems(prev=>{
                let tableArr = [...prev, table];
                return tableArr;
            });
        }
        setInputData("");
    }

    return (
        <>
            <form onSubmit={submithandler}>
                <input type="text" value={inputData} onChange={(e)=> setInputData(e.target.value)} />
                <button type="submit">submit</button>
            </form>

            {
                // items.filter((item, index)=>{
                //     for(let i = 0; i <= 10; i++){
                //         return i * item
                //     }
                // })

                items.map((item, index)=>(
                    <div key={index}><h5>{item}</h5></div>
                ))
            }
        </>
    )
}

// const InputTask = () => {
//     const [data, setData] = useState({ lname: '' })
//     const { lname } = data;

//     const onchangehandler = (e) => {
//         setData({ ...data, [e.target.name]: e.target.value })
//         console.log(data)
//     }

//     const submithandler = (e) => {
//         e.preventDefault()
//         console.log('jdjdjfjdj')
//         setData({ lname: '' })
//     }

//     return (
//         <>
//             <form onSubmit={submithandler}>
//                 <input type="text" name='lname' value={lname} onChange={onchangehandler} />
//                 <button type="submit">submit</button>
//             </form>

//             <h1>{lname}</h1>
//         </>
//     )
// }

export default InputTask
