import { Schema, model } from "mongoose";

let collection = 'companies'
let schema = new Schema({
    name:{type:String, required: true},
    website: {type: String},
    description:{type: String, required: true},
    photo:{type: String, required: true},
    user_id:{type: Schema.Types.ObjectId, ref: 'users', required: true},
    active:{type: Boolean },
}, {
    timestamps: true
})


let Company = model(collection, schema)
export default Company