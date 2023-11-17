import Link from 'next/link';

//Style
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
    return (
        <>
            <header className={styles.header} >
                <Link href='/' >
                    <h2> MyCRM </h2>
                </Link>
                <Link href='/customer' >
                    Add Customer
                </Link>
            </header>

            <div className={styles.main} > {children} </div>

            <footer className={styles.footer} >
                <a href="http://radmehr-weblog.vercel.app" target="_blank" rel="noopener noreferrer">Radmehr | MyCRM &copy; </a>
            </footer>
        </>
    );
};

export default Layout;