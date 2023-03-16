import React, { useEffect } from 'react';
import {deleteUserDetails} from '../redux/action/action';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();
    const resposeData = useSelector((state) => state.Reducer.details);

    const deleteData = (id) => {
        //alert(`http://localhost:3001/details/${id}`)
        dispatch(deleteUserDetails(id));
    }

    return (
        <>
            <div className="text-center mt-5 mb-5">
                <Link to="/addDetails">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Add To Do</button>
                </Link>
            </div>

            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Country</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        resposeData.map((val, index) => (
                            <tr key={index}>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td>{val.phone}</td>
                                <td>{val.country}</td>
                                <td><Link to={`/update/${val.id}`}>Edit</Link></td>
                                <td><button onClick={()=>deleteData(val.id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Home
