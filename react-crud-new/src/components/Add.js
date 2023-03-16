import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const Add = () => {
    const [formData, setFormData] = useState({
        title:'',
        body:''
    })
    const {title, body} = formData;
    let navigate = useNavigate();

    const changeHandler = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("/books",{id:uuidv4(), title, body}).then(()=>{
            setFormData({title:'',body:''}).reverse()
        })
        navigate("/");
    }

    return (
        <>
            <div className='container mt-5'>
                <p className='text-right'><Link to="/">Back to Home</Link></p>
                <div className="row justify-content-center">
                    <div className="card col-5">
                        <div className="card-body">
                            <h4 className='text-center'>Add To Do</h4>
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
                            </form>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Add