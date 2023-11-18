import Customer from "../../../model/Customer";
import connectDB from "../../../utils/connectDB";

export default async function handler(req, res) {

    const { method ,query:{customerId} } = req;

    // Connect to DB
    try {
        await connectDB()
    } catch (err) {
        console.log("Error in Connected to DB #/api")
        return res.status(500).json({
            status:"failed",
            massage: "Error to connect to DB"
        })
    }
    // --------------

    // DELETE
    if (method === "DELETE") {
        try {
           await Customer.findOneAndDelete({ _id : customerId })
            res.status(200).json({
                status: "success",
                massage: "Data deleted"
            })
        } catch (err) {
            console.log("Error in get data #/api GET")
            return res.status(500).json({
                status:"failed",
                massage: "Error in get data"
            })
        }
    }
    // --------------

}