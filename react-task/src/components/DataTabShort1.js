import axios from 'axios';
import React,{useEffect, useState} from 'react'

const DataShort = () => {
  const [count, setCount] = useState([]);
  const [status, setStatus] = useState([]);
  const [statusToggle,setStatusToggle] = useState(false);
  const [completed, setCompleted] = useState(0);
  const [pending, setPending] = useState(0);
  const [rejected, setRejected] = useState(0);
  //const [reset, setReset] = useState(false);

  useEffect(()=>{
      axios.get('http://localhost:5000/todos').then((res)=>{
        setCount(res.data);
        let complete = res.data.filter(todo=>todo.status === 'completed');
        setCompleted(complete.length);
        let pending = res.data.filter(todo=>todo.status === 'pending');
        setPending(pending.length);
        let reject = res.data.filter(todo=>todo.status === 'rejected');
        setRejected(reject.length);
      })
  }, [statusToggle]);

  const statusHandler = (status) => {
    if(status==='all'){
      setStatus([]);
    }
    else {
      let statusData = count.filter(todo=>todo.status === status);
    setStatus(statusData);
    }
  }

  const changeStatus = (todoStatus, id) => {
    axios.patch(`http://localhost:5000/todos/${id}`,{status:todoStatus}).then(()=>{
      setStatusToggle(!statusToggle);
      
      if(status.length > 0){
        //console.log(status);
        let newTab = [...status];
        let tabData = newTab.filter(todo=> todo.id !== id);
        setStatus(tabData)
      }

    })
  }


  return (
    <>
      <div className='container mt-5'>
        <div className="row justify-content-md-center mt-5">
          <div className="col-6">
            <button className="btn btn-info text-white" style={{'width':'25%'}} onClick={()=>{statusHandler("all")}}>All ({count.length})</button>
            <button className="btn btn-success text-white" style={{'width':'25%'}} onClick={()=>{statusHandler("completed")}}>Completed ({completed})</button>
            <button className="btn btn-warning text-white" style={{'width':'25%'}} onClick={()=>{statusHandler("pending")}}>Pending ({pending})</button>
            <button className="btn btn-danger" style={{'width':'25%'}} onClick={()=>{statusHandler("rejected")}}>Rejected ({rejected})</button>
          </div>
        </div>
        <div className="row justify-content-md-center mt-3">
          <div className='col-6'>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Action</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                {
                  (status.length > 0 ? status: count).map((view, index)=>(
                    <tr key={index}>
                      <th scope="row">{index+1}</th>
                      <td>{view.todo}</td>
                      <th>{view.status}</th>
                      <td>
                        {view.status !== 'completed' && <button onClick={()=>{changeStatus("completed", view.id)}} className="btn btn-success">Completed</button>}
                        {view.status !== 'pending' && <button onClick={()=>{changeStatus("pending", view.id)}} className="btn btn-warning">Pending</button>}
                        {view.status !== 'rejected' &&<button onClick={()=>{changeStatus("rejected", view.id)}} className="btn btn-danger">Rejected</button>}

                      </td>
                      <td>{view.userId}</td>
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

export default DataShort