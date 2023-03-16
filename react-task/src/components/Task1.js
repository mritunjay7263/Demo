import React, { useState } from 'react';

const Task1 = () => {
  const [detail, setDetail] = useState({ uname: '', address: '' });
  const { uname, address } = detail;

  const [detail2, setDetail2] = useState({ uname2: '', address2: '' });
  const { uname2, address2 } = detail2;


  const changeField = (e) => {
    setDetail({ ...detail, [e.target.name]: e.target.value })
    //console.log(`uname: ${uname}, address: ${address}`);
  }



  let formHandal = (e) => {
    e.preventDefault();
    if(uname === "" || address === ""){
      window.alert('Please fill user name and address');
    }
    else {
      setDetail2({uname2:uname,address2:address});
    }

  }

  return (
    <>
      <form onSubmit={formHandal}>
        <input type="text" placeholder="Name" name="uname" value={uname} onChange={changeField} />
        <input type="text" placeholder="Address" name="address" value={address} onChange={changeField} />
        <button type='submit'>Add</button>
      </form>

      <input type="text" placeholder="Name" name="uname2" value={uname2} onChange={changeField} readOnly='true' />
      <input type="text" placeholder="Address" name="address2" value={address2} onChange={changeField} readOnly='true' />

    </>
  )
}

export default Task1