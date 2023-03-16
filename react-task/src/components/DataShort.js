import axios from 'axios';
import React,{useEffect, useState} from 'react'

const DataShort = () => {
  const [count, setCount] = useState([]);
  const [reset, setReset] = useState(false);

  useEffect(()=>{
      axios.get('http://localhost:5000/class').then((res)=>{
        setCount(res.data);
        
      })
  }, [reset]);

  const resetHandler = () => {
    setReset(!reset);
  }



  const handleChange = (e) => {
    //console.log({'value': e.target.value});
    console.log(e.target.value);

    switch(e.target.value){

      case "Name":
        let sorted = [...count].sort((a,b) => (a.Name > b.Name) ? 1 : ((b.Name > a.Name) ? -1 : 0));
        return setCount(sorted);

      case "Roll":
        let sortByRoll = [...count].sort((a,b)=>a.Roll-b.Roll);
        return setCount(sortByRoll);

      case "Age":
          let sortByAge = [...count].sort((a,b)=>a.Age-b.Age);
          return setCount(sortByAge);

      case "Marks":
        let sortByMarks = [...count].sort((a,b)=>b.Marks-a.Marks);
        return setCount(sortByMarks);

      default:
        return setCount(count);

    }
    
    
  }

  // handleChange(e) {
  //   //this.setState({ value: e.target.value });
  //   alert(e.target.value);
  // }

  return (
    <>
      <div className='container mt-5'>
        <div className="row justify-content-md-center">
          <div className='col-3 text-center'>
            <select className="form-select" onChange={(e)=>handleChange(e)}>
              <option value="">Short By</option>
              <option value="Name">Name</option>
              <option value="Roll">Roll No</option>
              <option value="Age">Age</option>
              <option value="Marks">Marks</option>
            </select>
            <br />
            <button className='btn btn-primary' onClick={resetHandler} >Reset</button>
          </div>
        </div>

        <div className="row justify-content-md-center mt-5">
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
                      <td>{view.Marks}</td>
                    </tr>
                  ))
                }
                
                {/* <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@fat</td>
                </tr> */}

              </tbody>
            </table>

          </div>
        </div>
      </div>
    </>
  )
}

export default DataShort