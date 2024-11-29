import { ref, required } from "joi";
import { Schema, model } from "mongoose";

let collection = 'companies'
let schema = new Schema({
    name:{type:String, required: true},
    website: {type: String},
    photoUrl:{type: String, required: true},
    user_id:{type: Schema.Types.ObjectId, ref: 'users', required: true},
    active:{type: String, required:true}
}, {
    timestamps: true
})


let Company = model(collection, schema)
export default Company