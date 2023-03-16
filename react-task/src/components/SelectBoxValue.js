import React, { useState } from 'react'

const SelectBoxValue = () => {
    const options = [
        { value: '', text: '--Choose an option--' },
        { value: '1', text: 'Apple' },
        { value: '2', text: 'Banana' },
        { value: '3', text: 'Kiwi' },
    ];

    const [count, setCount] = useState(options[0].text);
    //const changeHandler = (e) => {
        //console.log(e.target.value);
        //setCount(e.target.name);
        //console.log(e.target);
        //console.log(count);
    //}

    const changeText = (text) => {
        setCount(text);
    }



    return (    
        <div>
            <select>
                {options.map((option,index) => (
                    <option key={index} onClick={()=>changeText(option.text)} name={option.text} value={option.value}>
                        {option.text}
                    </option>
                ))}
            </select>

            {/* <select className="form-select" onChange={changeHandler}>
                <option value="">Short By</option>
                <option value="1">Name</option>
                <option value="2">Roll No</option>
                <option value="3">Age</option>
                <option value="4">Marks</option>
            </select> */}
            <h1>{count}</h1>
        </div>
    )
}



export default SelectBoxValue
