import React, { useState } from 'react';

const SelectBoxCheck = () => {
    const [count, setCount] = useState([]);

    const checkBox = () => {
        console.log(count)
    }

    return (
        <>
            <div className='container mt-5'>
                <div className="row justify-content-md-center">
                    <div className='col-3'>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" name="check1" onChange={checkBox} />
                            <label className="form-check-label">
                            Curabitur convallis dui et sem imperdiet, et ullamcorper nunc tempor.
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" name="check2" onChange={checkBox} />
                            <label className="form-check-label">
                            Maecenas accumsan risus et massa mollis vulputate.
                            </label>
                        </div>
                        <div className="text-center">
                            <button type="button" className="btn btn-secondary">No</button>
                            &nbsp;&nbsp;
                            <button type="button" className="btn btn-primary">Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SelectBoxCheck
