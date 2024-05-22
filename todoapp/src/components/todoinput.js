import React, { useState } from 'react';

function Todoinput(props) {
    //for input in the text field
    const [inputtext, setInputtext] = useState('')
    return (
        <div className="Input-container">
            <input
                type="text"
                className='input-box-todo'
                placeholder='Enter your TODO'
                value={inputtext}
                onChange={e => setInputtext(e.target.value)} />
            <button
                className='add-btn'
                onClick={() => { props.addtolist(inputtext); setInputtext("") }}>+</button>
            <button className='btn-remove'
                onClick={() => { props.remove()}}>Remove All</button>


        </div>
    );
}

export default Todoinput;