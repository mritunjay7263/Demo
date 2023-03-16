import React, { useState } from 'react'

const TodoOnePage = () => {
    let [data, setData] = useState('');
    let [listData, setListData] = useState([]);

    

    let addActivety = () => {
        // if(data !== ''){
        //     setListData([...listData, data])
        //     setData('')
        //     console.log(listData)
        // }
        

        setListData((listData)=>{
            const updatedList = [...listData, data]
            //console.log(updatedList)
            setData('')
            return updatedList;
        })
    }

    let removeHandler = (id) => {
        console.log('index1' + id)
        const updatedListData = listData.filter((item, index)=>(
            id != index, console.log('index2' + index)
             
        ))
        setListData(updatedListData)
    }

    return (
        <>
            <input type='text' value={data} onChange={(e)=>setData(e.target.value)} />
            <button type='submit' onClick={addActivety}>Submit</button>

            <div>
                {
                    listData.map((item, index)=>(
                        <ul key={index}>
                            <li>{item} <span onClick={()=>removeHandler(index)}>Remove</span></li>
                        </ul>
                    ))
                }
            </div>
        </>
    )
}

export default TodoOnePage
