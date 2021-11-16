import {Schema,model} from 'mongoose';

const SEX_CHOICES = ['Homme', 'Femme']
const MARITAL_STATUS_CHOICES = ['Célibataire', 'Marié.e', 'Divorcé.e', 'Veuf.ve']

const userSchema = new Schema(
    {
        lastname: String,
        firstname: String,
        phone: String,
        email: String,
        address: String,
        fokontany: String,
        cin: String,
        sex: {
            type: String,
            // enum: SEX_CHOICES
        },
        maritalStatus: {
            type: String,
            // enum: MARITAL_STATUS_CHOICES
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
