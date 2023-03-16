import React, { useMemo, useState } from 'react'

const Memo = () => {
    let [add, setAdd] = useState(0);
    let [minus, setMinus] = useState(10);

    const multiplication = useMemo(
        function multiply(){
            console.log('multiply')
            return add*10;
        },[add]
    )

    return (
        <>  
            <h1>Learn UseMemo</h1>
            <h2>{multiplication}</h2>
            <br/><br/>

            <button type='submit' onClick={()=>setAdd(add++)}>Plus</button>
            <h2>{add}</h2>
            <br/><br/>

            <button type='submit' onClick={()=>setMinus(minus--)}>Minus</button>
            <h2>{minus}</h2>
        </>
    )
}

export default Memo
