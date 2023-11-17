import React from 'react';

const InputForm = ({ name ,id ,value ,changeHandler ,type }) => {
    return (
        <div>
            <label htmlFor={name}> { name } </label>
            <input type={type} value={value} onChange={changeHandler} id={id} />
        </div>
    );
};

export default InputForm;