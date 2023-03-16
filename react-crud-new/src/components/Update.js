import React, { useEffect, useState } from 'react'
import { Link,NavLink, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
    const [formData, setformData] = useState({
        title:'',
        body:''
    })
    const {title, body} = formData;

    let navigate = useNavigate();
    let {updateId} = useParams();
    //console.log(formData)

    const changeHandler = (e) => {
        setformData({...formData, [e.target.name]:e.target.value})
    }
 
    useEffect(()=>{
        axios.get(`/books/${updateId}`).then((res)=>{
            setformData(res.data);
        })
    },[])

    const formSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`/books/${updateId}`, formData).then(()=>{
            setformData({title:'',body:''});
            navigate("/");
        })
    }

    

    return (
        <>
            <div className='container mt-5'>
                <p className='text-right'><Link to="/">Back to Home</Link></p>
                <div className="row justify-content-center">
                    <div className="card col-5">
                        <div className="card-body">
                            <h4 className='text-center'>Update To Do</h4>
                            <form onSubmit={formSubmitHandler}>
                                {/* <div className="mb-3">
                                    <label className="form-label">ID</label>
                                    <input type="number" className="form-control" name="id" value={id} onChange={changeHandler} />
                                </div> */}

                                <div className="mb-3">
                                    <label className="form-label">Title</label>
                                    <input type="text" className="form-control" name="title" value={title} onChange={changeHandler} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Body</label>
                                    <input type="text" className="form-control" name="body" value={body} onChange={changeHandler} />
                                </div>

                                <button type="submit" className="btn btn-primary">Submit</button>
                                {"  "}<NavLink to="/" className="btn btn-secondary" type="button">Cancel</NavLink>
                            </form>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Update