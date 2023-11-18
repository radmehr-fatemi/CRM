//Style
import styles from "./HomePage.module.scss";

//Component
import CardCustomer from '../../module/card/CardCustomer';

const HomePage = ({ customers }) => {
    return (
        <div className={ styles.homePage } >
            {
                customers.map( customer => ( <CardCustomer key={customer._id} { ...customer } /> ))
            }
        </div>
    );
};

export default HomePage;