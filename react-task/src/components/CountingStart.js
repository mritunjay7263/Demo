import React,{useState, useRef} from 'react';

const CountingStart = () => {
    let [count, setCount] = useState(0);
    let intervalRef = useRef(null);
    let buttonRef = useRef();

    console.log(buttonRef.current)

    let startHandler = (e) => {
        e.preventDefault();
       intervalRef.current = setInterval(()=>{
            setCount(count++)
            //console.log('1');
        }, 1000)

       // console.log(buttonRef.current)
    }

    let stopHandler = (e) => {
        e.preventDefault();
        //console.log('1');
        clearInterval(intervalRef.current);
    }


  return (
    <>
      <button ref={buttonRef} onClick={startHandler}>Start</button>
      <button onClick={stopHandler}>Stop</button>
      <h5>{count}</h5>
    </>
  )
}

export default CountingStart
