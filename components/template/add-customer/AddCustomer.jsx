import { useRouter } from "next/router";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

//Style
import styles from "./AddCustomer.module.scss";

//Component
import Form from "../../module/form/Form";

const AddCustomer = () => {

    const router = useRouter();

    const [form, setForm] = useState({
        name: "",
        lastName: "",
        email: "",
        address: "",
        date: "",
        phone: "",
        postalCode: "",
        products: [],
    });

    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    const saveHandler = async () => {
        const { name, lastName, email } = form;
        if (!name.trim() && !lastName.trim() && !regex.test(email)) {
            toast.error("Invalid Data")
            return
        } else {
            const res = await fetch("/api/add-customer", {
                method: "POST",
                headers: { "Content-Type": "Application/json" },
                body: JSON.stringify(form)
            })
            const data = await res.json();
            if (data.status === "success") {
                toast.success("Created Data")
                setForm({
                    name: "",
                    lastName: "",
                    email: "",
                    address: "",
                    date: "",
                    phone: "",
                    postalCode: "",
                    products: [],
                })
                router.push("/")
            }
        }
    };

    const cancelHandler = () => {
        setForm({
            name: "",
            lastName: "",
            email: "",
            address: "",
            date: "",
            phone: "",
            postalCode: "",
            products: [],
        })
        router.push("/")
    };

    return (
        <div className={styles.addCustomer} >
            <h3> Add New Customer </h3>

            <div className={styles.form} >
                <Form form={form} setForm={setForm} />
            </div>

            <div className={styles.buttons} >
                <button onClick={cancelHandler} >Cancel</button>
                <button onClick={saveHandler} >Save</button>
            </div>
            <ToastContainer style={{
                padding: "1rem"
            }} />
        </div>
    );
};

export default AddCustomer;