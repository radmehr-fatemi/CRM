import Customer from "../../../model/Customer";
import connectDB from "../../../utils/connectDB";

export default async function handler(req, res) {

    const { method, body, query: { customerId } } = req;

    // Connect to DB
    try {
        await connectDB()
    } catch (err) {
        console.log("Error in Connected to DB #/api")
        return res.status(500).json({
            status: "failed",
            massage: "Error to connect to DB"
        })
    }
    // --------------

    // PATCH
    if (method === "PATCH") {
        try {
            const customer = await Customer.findOne({ _id: customerId });
            customer.name = body.name;
            customer.lastName = body.lastName;
            customer.email = body.email;
            customer.address = body.address;
            customer.postalCode = body.postalCode;
            customer.phone = body.phone;
            customer.date = body.date;
            customer.updateAt = body.updateAt;
            customer.products = Date.now();
            res.status(200).json({
                status: "success",
                massage: "Get data successfully",
                data: customer,
            })
        } catch (err) {
            console.log("Error in patch data #/api/details PATCH")
            return res.status(500).json({
                status: "failed",
                massage: "Error in patch data"
            })
        }
    }
    // --------------

}