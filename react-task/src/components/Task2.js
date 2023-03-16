import React, { useState } from 'react';

function Task2() {
    const [states, setStates] = useState([]);

    const stateHandler = e => {
        
        if(e.target.checked){
            setStates([...states, e.target.value]); 
        }
        else {
            let updateStates = states.filter(state=>state !== e.target.value);
            setStates(updateStates);
        }
    }

    const removeState = (singleState) => {
        let updateStates = states.filter(state=>state !== singleState);
            setStates(updateStates);
    }

    return (
        <>
            <div className='container mt-5'>
                <div className="row justify-content-md-center">
                    <div className='col-4'>
                        <div className="card ">
                            <div className="card-header">
                                Select State
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="Delhi" name="Delhi" checked={states.indexOf("Delhi") !== -1} onClick={stateHandler} />
                                        <label className="form-check-label">
                                            Delhi
                                        </label>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="Maharashtra" name="Maharashtra" checked={states.indexOf("Maharashtra") !== -1} onClick={stateHandler} />
                                        <label className="form-check-label">
                                            Maharashtra
                                        </label>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="Haryana" name="Haryana" checked={states.indexOf("Haryana") !== -1} onClick={stateHandler} />
                                        <label className="form-check-label">
                                            Haryana
                                        </label>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className="card" style={{padding:'10px'}}>
                            {states.length > 0 ? states.map((state,index)=>(
                                <div key={index} className="alert alert-primary alert-dismissible show">{state}
                                <button onClick={()=>removeState(state)} type="button" className="btn-close"></button>
                            </div>
                            )) : <div className="alert alert-info text-center">No State Selected
                                </div>}
                            
                            
                            
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Task2