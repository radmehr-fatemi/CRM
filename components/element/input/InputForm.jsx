import React from 'react';

//Style
import styles from "./InputForm.module.scss";

const InputForm = ({ name ,label ,value ,changeHandler ,type }) => {
    return (
        <div className={ styles.inputForm } >
            <label htmlFor={name}> { label } </label>
            <input type={type} value={value} onChange={changeHandler} id={name} name={name} />
        </div>
    );
};

export default InputForm;