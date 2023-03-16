// import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//***** Test One *****/
import Update from './components/Update';
import Add from './components/Add';
import Home from './components/Home';

function App() {
  // let [count, setCount] = useState(0);

  // const CountFun = () => {
  //   setCount(count+1);
  // }
  // useEffect(()=>{
  //   alert('Hello useEffect')
  //   return () => {
  //     alert('Component Will Unmount')
  //   }
  // }, [count])

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add" element={<Add/>} />
        <Route path="/update/:updateId" element={<Update/>} />
      </Routes>
    </BrowserRouter>
    
    {/* <h1>{count}</h1>
    <button onClick={CountFun}>Submit </button> */}
    </>
  );
}

export default App;
