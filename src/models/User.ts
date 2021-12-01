import { Schema, model, Types } from 'mongoose';

const userSchema = new Schema(
    {
        phone: String,
        email: String,
        isAdmin: Boolean,
        person : {
            type: Types.ObjectId,
            ref: 'Person'
        },
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
