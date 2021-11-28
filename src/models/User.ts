import { Schema, model } from 'mongoose';

const userSchema = new Schema(
    {
        lastname: String,
        firstname: String,
        phone: String,
        email: String,
        address: String,
        fokontany: {
            type: Number,
            ref: 'Fokontany'
        },
        cin: String,
        sex: String,
        maritalStatus: String,
        username: {
            type: String,
            required: true,
        },
        password:{
            type: String,
            required: true
        },
    }
)

const Users = model('Users',userSchema);

module.exports = Users;
