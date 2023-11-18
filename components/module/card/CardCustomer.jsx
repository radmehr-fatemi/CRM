import { useRouter } from "next/router";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

//Style
import styles from "./CardCustomer.module.scss";

const CardCustomer = (props) => {

    const { name, lastName, email, _id } = props;
    const router = useRouter();

    const deleteHandler = async () => {
        try {
            const res = await fetch(`/api/delete/${_id}`, { method: "DELETE" });
            const data = await res.json();
            if ( data.status === "success" ) {
                toast.success("deleted Customer")
                const timeout = setTimeout( () => router.reload() ,1000 )
                router.reload()
            }
        } catch (err) {
            console.log("Error in deleted data #CardCustomer")
        }
    }

    return (
        <div className={styles.cardCustomer} >
            <div className={styles.field1} >
                <h4>
                    {name}
                    {lastName}
                </h4>
                <p> {email} </p>
            </div>

            <div className={styles.field2} >
                <button onClick={deleteHandler} className={styles.button} >Delete</button>
                <Link className={styles.link1} href={`/edit/${_id}`} > Edit </Link>
                <Link className={styles.link2} href={`/customer/${_id}`} > Details </Link>
            </div>
            <ToastContainer style={{
                padding: "1rem"
            }} />
        </div>
    );
};

export default CardCustomer;