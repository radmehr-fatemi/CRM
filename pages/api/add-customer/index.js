import Customer from "../../../model/Customer";
import connectDB from "../../../utils/connectDB";

export default async function handler(req, res) {

    const { method, body } = req;

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

    // GET
    if (method === "GET") {
        try {
            const customers = await Customer.find();
            res.status(200).json({
                status: "success",
                massage: "Data received successfully",
                data: customers,
            })
        } catch (err) {
            console.log("Error in get data #/api GET")
            return res.status(500).json({
                status: "failed",
                massage: "Error in get data"
            })
        }
    }
    // --------------

    // POST
    if (method === "POST") {
        try {
            const customer = await Customer.create(body.data);
            res.status(200).json({
                status: "success",
                massage: "post data was successfully",
                data: customer,
            })
        } catch (err) {
            console.log("Error in get data #/api POST")
            return res.status(500).json({
                status: "failed",
                massage: "Error in post data"
            })
        }
    }
    // --------------

}