import Customer from "../../../model/Customer";
import connectDB from "../../../utils/connectDB";

export default async function handler(req, res) {
    const { method, query } = req;
    const id = query.customerId;

    //Connect to DB
    try  {
        await connectDB()
    } catch (err) {
        console.log("Error in connected to DB #/api/[customerId]")
        res.status(500).json({
            status:"failed",
            massage:"Error in connect to server"
        })
        return
    }
    
    //GET
    if (method === "GET") {
        try {
            const customer = await Customer.findById(id);
            res.status(201).json({
                status: "success",
                data: customer,
            })
        } catch (err) {
            console.log("Error in delete Data #/api/[customerId] GET")
            res.status(500).json({
                status: "failed",
                massage: "Error in find data"
            })
            return
        }

    }

    //DELETE
    if (method === "DELETE") {
        try {
            await Customer.findByIdAndDelete(id)
            res.status(201).json({
                status: "success",
                massage: "Daa deleted"
            })
        } catch (err) {
            console.log("Error in delete Data #/api/[customerId] DELETE")
            res.status(500).json({
                status: "failed",
                massage: "Error in delete data"
            })
            return
        }
    }
}