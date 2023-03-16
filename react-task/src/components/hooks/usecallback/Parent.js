import React, { useCallback, useState } from 'react'
import Child from './Child'

const Parent = () => {
  let [add, setAdd] = useState(0);
  let [count, setCount] = useState(0);

  let Learning = useCallback(() => {
  },[count])

  return (
    <>
        <h1>Learn useCallback</h1>

        <Child Learning={Learning} count={count}/>
        {/* Referential Equality: Jab bhi hamara page rerender hota hai to functions recreate hote hai. Child Component ko lagega ki hamara Learning function recreate hua hai ya kuch new hai or Child Component fir se rerender hoga. */}

        <h1>{add}</h1>
        <button type='submit' onClick={()=>{setAdd(add+1)}}>Add</button>

        <h1>{count}</h1>
        <button type='submit' onClick={()=>{setCount(count+2)}}>Count</button>
    </>
  )
}

export default Parent
