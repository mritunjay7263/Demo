import React, { useEffect,useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    let [formData, setformData] = useState([]);

    const [fetchBooks,setFetchBooks] = useState(false);
    const getBooks = () => {
        setFetchBooks(!fetchBooks);
    }
    //console.log(!fetchBooks)
    // const getData = () => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then((res) => {
    //             setformData(res.data);
    //          })
    // }

    useEffect(()=>{
        axios.get('/books').then((res)=>{
            setformData(res.data)
        })
        //alert('Hello world')
    },[fetchBooks])

    let deleteHandler = (id) => {
        axios.delete(`/books/${id}`).then(()=>{
            //alert(`https://jsonplaceholder.typicode.com/posts/${id}`)
            getBooks();
        })
    }

    return (
        <>
            <div className='container'>
                <div className="text-center mt-5">
                    <Link to="/add">
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Add To Do</button>
                    </Link>
                </div>
                
                <div className="row justify-content-md-center mt-5">
                    <div className='col-12'>
                        <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>&nbsp;</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formData.map((item,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{item.title}</td>
                                        <td>{item.body}</td>
                                        <td>
                                            <Link to={`/update/${item.id}`}><button className="btn btn-secondary" type="button">Update</button></Link>
                                        </td>
                                        <td>
                                            <button className="btn btn-secondary" type="button" onClick={()=>deleteHandler(item.id)}>Delete</button>
                                            </td>
                                    </tr>
                                )
                            })}
                            
                        </tbody>
                        </table>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Home
