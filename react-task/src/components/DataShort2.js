import axios from 'axios';
import React,{useEffect, useState} from 'react'

const DataShort1 = () => {
  const [count, setCount] = useState([]);
  const [complated, setComplated] = useState(0);
  const [rejected, setRejected] = useState(0);
  const [status, setStatus] = useState([]);

  useEffect(()=>{
      axios.get('http://localhost:5000/todos').then((res)=>{
        setCount(res.data);
        let complate = res.data.filter(e => e.Status === 'Complated')
        setComplated(complate.length)
        let reject = res.data.filter(e => e.Status === 'Rejected')
        setRejected(reject.length)
      })
  },[]);

  const statusHandler = (status) => {
  //   if(status === "All"){
  //     setStatus([])
  //   }else{
       let resultData = count.filter(item => item.Status === status);
  //     setStatus(resultData)
  //   }
   }


  return (
    <>
      <div className='container mt-5'>

        <div className="row justify-content-center mt-5">
          <div className='col-6'>
            <button className='btn btn-primary' onClick={statusHandler('All')}>All {count.length}</button>
            <button className='btn btn-success' onClick={statusHandler('Complated')}>Complated {complated}</button>
            <button className='btn btn-danger' onClick={statusHandler('Rejected')}>Rejected {rejected}</button>
          </div>
        </div>
        
        <div className="row justify-content-center mt-5">
          <div className='col-6'>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Name</th>
                  <th>Roll No.</th>
                  <th>Age</th>
                  <th>Marks</th>
                </tr>
              </thead>
              <tbody>
                {
                  count.map((view, index)=>(
                    <tr key={index}>
                      <th scope="row">{index+1}</th>
                      <td>{view.Name}</td>
                      <td>{view.Roll}</td>
                      <td>{view.Age}</td>
                      <td>{view.Status}</td>
                    </tr>
                  ))
                }

              </tbody>
            </table>

          </div>
        </div>


      </div>
    </>
  )
}

export default DataShort1