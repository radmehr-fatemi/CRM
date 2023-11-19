import Link from "next/link";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

//Style
import styles from "./CustomerPage.module.scss";
import moment from "moment/moment";

//Component
import ShowTitle from "../../../utils/ShowTitle";

const CustomerPage = ({ customer }) => {

    const { _id, name, lastName, email, phone, address, postalCode, date, products } = customer;
    const router = useRouter();
    const newDate = moment(date).utc().format("YYYY-MM-DD");

    const deleteHandler = async () => {
        const res = await fetch(`/api/delete/${_id}`, { method: "DELETE" });
        const data = await res.json();
        if (data.status === "success") {
            toast.success("Deleted the Customer")
            const timeout = setTimeout(() => router.replace("/"), 1400)
        }
    }

    return (
        <div className={styles.customerPage} >
            <ShowTitle title="Customer Details" description="show customer Details" />
            
            <h3> Customer`s Details </h3>

            <div className={styles.field1} >
                <ul className={styles.field1_ul} >
                    <li>
                        Name <span> {name} </span>
                    </li>
                    <li>
                        Last Name <span> {lastName} </span>
                    </li>
                    <li>
                        NamEmail <span> {email} </span>
                    </li>
                    <li>
                        Phone <span> {phone} </span>
                    </li>
                    <li>
                        Address <span> {address} </span>
                    </li>
                    <li>
                        Postal Code <span> {postalCode} </span>
                    </li>
                    <li>
                        Date <span> {newDate} </span>
                    </li>
                </ul>
            </div>

            <div className={styles.field2} >
                <ul className={styles.field2_ul_1} >
                    <li>Name</li>
                    <li>Price</li>
                    <li>Qty</li>
                </ul>
                {
                    products.map((product ,index) => (
                        <ul key={index} className={styles.field2_ul_2} >
                            <span> {product.name} </span>
                            <span> {product.price} </span>
                            <span> {product.qty} </span>
                        </ul>
                    ))
                }
            </div>

            <div className={styles.field3} >
                <span>Edit or Delete?</span>

                <div>
                    <button onClick={deleteHandler} >Delete</button>
                    <Link href={`/edit/${_id}`}>Edit</Link>
                </div>
            </div>

            <ToastContainer style={{
                padding: "1rem"
            }} />
        </div>
    );
};

export default CustomerPage;