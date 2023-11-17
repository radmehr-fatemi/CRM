import { model ,models ,Schema } from "mongoose";

const customerSchema = new Schema({
    name:{
        type: String,
        minLength: 3,
        required: true,
    },
    lastName:{
        type: String,
        minLength: 3,
        required: true,
    },
    email:{
        type: String,
        minLength: 3,
        required: true,
    },
    createAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
    },
    updateAt: {
        type: Date,
        default: () => Date.now(),
    },
    products: {
        type: Array,
        default: [],
    },

    phone: String,
    address: String,
    postalCode: Number,
    date: Date,

})

const Customer = models.Customer || new model( "Customer" ,customerSchema );
export default Customer