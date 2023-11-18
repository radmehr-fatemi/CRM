import CustomerPage from "../../components/template/customer/CustomerPage";
import Customer from "../../model/Customer";
import connectDB from "../../utils/connectDB";

const Details = ({ customer }) => {
    return <CustomerPage customer={customer}  />
};

export default Details;

export const getStaticPaths = async () => {
    await connectDB()
    const data = await Customer.find();
    const customers = data.slice(0, 10);

    const paths = data.map(customer => ({ params: { customerId: customer._id.toString() } }));
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.customerId;
    try {
        await connectDB()
        const customer = await Customer.findOne({ _id: id })
        return {
            props: {
                customer: JSON.parse(JSON.stringify(customer))
            }
        }
    } catch (err) {
        console.log("Error in get data #pages/[customerId]")
        return {
            props: {}
        }
    }
}