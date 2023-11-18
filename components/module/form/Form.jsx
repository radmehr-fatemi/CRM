import React from 'react';

//Style
import styles from "./Form.module.scss";

//Component
import InputForm from '../../element/input/InputForm';
import ItemList from '../itemList/ItemList';

const Form = ({ form, setForm }) => {
    return (
        <div className={ styles.form } >
            <InputForm  />

            <div>
                <ItemList form={form} setForm={setForm} />
            </div>
        </div>
    );
};

export default Form;