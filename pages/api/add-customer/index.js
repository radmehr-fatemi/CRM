import Customer from "../../../model/Customer";
import connectDB from "../../../utils/connectDB";

export default async function handler(req, res) {

    const { method, body } = req;
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

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
            const dataQuantity = customers.length;
            res.status(200).json({
                status: "success",
                massage: "Data received successfully",
                dataQuantity,
                data: body,
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
        const { name ,lastName ,email } = body;

        try {
            if (!name.trim() && !lastName.trim() && !regex.test(email)) {
                res.status(422).json({
                    status: "failed",
                    massage: "Invalid Data",
                })
            } else {
                const customer = await new Customer(body)
                customer.save()
                res.status(200).json({
                    status: "success",
                    massage: "post data was successfully",
                    data: customer,
                })
            console.log(body)

            }
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