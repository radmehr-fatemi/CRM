//Style
import styles from "./Form.module.scss";

//Component
import InputForm from '../../element/input/InputForm';
import ItemList from '../itemList/ItemList';

const Form = ({ form, setForm }) => {

    const {
        name,
        lastName,
        email,
        address,
        date,
        phone,
        postalCode,
    } = form;

    const changeHandler = e => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        })
    }

    return (
        <div className={styles.form} >

            <InputForm
                name="name"
                label="Name"
                type="text"
                value={name}
                changeHandler={(e) => changeHandler(e)}
            />
            <InputForm
                name="lastName"
                label="Last Name"
                type="text"
                value={lastName}
                changeHandler={(e) => changeHandler(e)}
            />
            <InputForm
                name="email"
                label="Email"
                type="text"
                value={email}
                changeHandler={(e) => changeHandler(e)}
            />
            <InputForm
                name="address"
                label="Address"
                type="text"
                value={address}
                changeHandler={(e) => changeHandler(e)}
            />
            <InputForm
                name="date"
                label="Date"
                type="Date"
                value={date}
                changeHandler={(e) => changeHandler(e)}
            />
            <InputForm
                name="phone"
                label="Phone"
                type="text"
                value={phone}
                changeHandler={(e) => changeHandler(e)}
            />
            <InputForm
                name="postalCode"
                label="Postal Code"
                type="tel"
                value={postalCode}
                changeHandler={(e) => changeHandler(e)}
            />

            <div>
                <ItemList form={form} setForm={setForm} />
            </div>
        </div>
    );
};

export default Form;