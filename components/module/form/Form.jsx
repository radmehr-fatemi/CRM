import React from 'react';

//Component
import InputForm from '../../element/input/InputForm';

//Style
import styles from "./Form.module.scss";

const Form = ({ form, setForm }) => {
    return (
        <div className={ styles.form } >
            <InputForm  />
        </div>
    );
};

export default Form;