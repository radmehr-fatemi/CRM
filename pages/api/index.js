import connectDB from "../../utils/connectDB";

export default async function handler(req, res) {

    const { method } = req;

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

    // GET
    if (method === "GET") {
        try {
            res.status(200).json([])
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