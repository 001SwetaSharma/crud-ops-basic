import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    firstName : {type: String, required: true, unique: true},
    lastName : {type: String, required: true},
    age : {type: Number, required: true},
    emailId : {type: String},
    userId: {type: String, unique: true}
});

export default mongoose.model('users', userSchema);