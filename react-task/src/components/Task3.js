import React, { useState } from 'react'

const Task3 = () => {
    const [state, setState] = useState([]);

    const [checkHandler, setCheckHandler] = useState(false);


    const clickHandler = (e) => {

        if(e.target.checked){
            setState([...state, e.target.value]);
        }
        else {
            let removeState = state.filter(stat=>stat !== e.target.value);
            console.log(removeState);
            setState(removeState);
        }
    }

    const resetHandler = () => {
        setState([]);
    }

    const checkAllHandler = () => {
        setState(["Delhi", "Mumbai", "Haryana"]);
    }

    return (
        <>
            <div className='container mt-5'>
                <div className="row justify-content-md-center">
                    <div className='col-4'>
                        <div className="card ">
                            <div className="card-header">
                                Selected is {state.length}
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="Delhi" value="Delhi" onChange={clickHandler} checked={state.includes("Delhi")} />
                                        <label className="form-check-label">
                                            Delhi
                                        </label>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="Mumbai" value="Mumbai" onChange={clickHandler} checked={state.includes("Mumbai")} />
                                        <label className="form-check-label">
                                            Mumbai
                                        </label>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="Haryana" value="Haryana" onChange={clickHandler} checked={state.includes("Haryana")} />
                                        <label className="form-check-label">
                                            Haryana
                                        </label>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <button className='btn btn-primary' onClick={resetHandler}>Reset</button>
                                    &nbsp;&nbsp;
                                    <button className='btn btn-primary' onClick={checkAllHandler}>Check All</button>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}

export default Task3