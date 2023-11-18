import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

//Style
import styles from "./EditPage.module.scss"

//Component
import Form from "../../module/form/Form";
import { useRouter } from "next/router";
;
const EditPage = ({ data, setData }) => {

    const router = useRouter();
    const id = router.query.customerId;
        
    const [form, setForm] = useState({
        name: data.name,
        lastName: data.lastName,
        email: data.email,
        address: data.address || '',
        date: data.date || '',
        phone: data.phone || '',
        postalCode: data.postalCode || '',
        products: data.products || [],
    });

    const saveHandler = async () => {
        const res = await fetch(`/api/edit/${id}` ,{
            method:"PATCH",
            headers: { "Content-Type" : "Application/json" },
            body: JSON.stringify(form)
        })
        const resData = await res.json();
        if ( resData.status === "success" ) {
            toast.success("Edited customer resData")
            const timeout = setTimeout( () => router.reload() ,1000 )
            console.log(resData.data)
        }
    }

    const cancelHandler = () => {
        router.push('/')
    }
    
    return (
        <div className={ styles.editPage } >
            <Form form={form} setForm={setForm} />
            
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

export default EditPage;