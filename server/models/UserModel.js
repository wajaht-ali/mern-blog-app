import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        default: "visitor"
    }
}, {timestamps: true})

const UserModel = mongoose.model("users", UserSchema);
export default UserModel;