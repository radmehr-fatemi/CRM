import mongoose from "mongoose";

const connectDB = async () => {
    try {
        if ( mongoose.connections[0].readyState ) return
        mongoose.connect( process.env.MONOGO_URI );
        mongoose.set( "strictQuery" ,false )

         if ( mongoose.connections[0].readyState ) console.log("Connected to DB")
         if ( !mongoose.connections[0].readyState ) console.log("Failed to connected to DB")

    } catch (err) {
        console.log("Error in connected to DB #connectDB");
    }
}

export default connectDB