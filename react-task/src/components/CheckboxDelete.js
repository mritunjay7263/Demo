import React, { useState } from 'react';

const CheckboxDelete = () => {
    const [states, setStates] = useState(['Punjab','Delhi','Uttar Pradesh','Haryana','Bihar','Madhya Pradesh','Karnataka','Goa','Kerla','Tamilnadu','Jammu Kashmir']);
    const [deleteState,setDeleteState]= useState([])

    const checkStatesHandler = (e) => {
        if(e.target.checked){
            setDeleteState([...deleteState, e.target.value])
        }else{
            let updateStates = deleteState.filter(state => state != e.target.value);
            setDeleteState(updateStates);
        }
        
    }
    console.log(deleteState);
    const removeState = () => {

        let getUpdateState = states.filter((state)=>!deleteState.includes(state));
        
        setStates(getUpdateState);
        setDeleteState([]);
    }

    return (
        <>
            <div className='container mt-5'>
                <div className="row justify-content-md-center">
                    <div className='col-3'>
                        <form>
                            {states.map((state,index)=>(
                            <div key={index} className="form-check">
                                <input className="form-check-input" type="checkbox" value={state} name={state} onChange={checkStatesHandler} checked={deleteState.includes(state)} />
                                <label className="form-check-label">
                                {state}
                                </label>
                            </div>
                            ))}
                    
                            <div className="text-center">
                                <button type="button" className="btn btn-secondary" onClick={()=>removeState(states)}>Delete</button>
                                &nbsp;&nbsp;
                                <button type="button" className="btn btn-primary">Reset</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckboxDelete
