//Style
import styles from "./HomePage.module.scss";

//Component
import CardCustomer from '../../module/card/CardCustomer';

const HomePage = ({ customers }) => {
    return (
        <div className={ styles.homePage } >
            {
                customers.map( customer => ( <CardCustomer { ...customer } /> ))
            }
        </div>
    );
};

export default HomePage;