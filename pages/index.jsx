import Customer from "../model/Customer";
import connectDB from "../utils/connectDB";

//Component
import HomePage from "../components/template/home/HomePage";

const Home = ({ customers }) => {
  return <HomePage customers={customers} />
};

export default Home;

export const getServerSideProps = async () => {

  try {
    connectDB()
  } catch (err) {
    console.log("Error in Connected to DB #home")
    return
  }

  try {
    const customers = await Customer.find();
    return {
      props: {
        customers: JSON.parse(JSON.stringify(customers))
      }
    }
  } catch (err) {
    console.log("Error in find data #home")
    return {
      props: {}
    }
  }
}