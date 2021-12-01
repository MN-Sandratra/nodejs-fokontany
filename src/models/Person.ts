import { Schema, model, Types } from 'mongoose';

const personSchema = new Schema(
    {
        lastname: String,
        firstname: String,
        address: String,
        cin: String,
        sex: String,
        maritalStatus: String,
        partner: {
            type: Types.ObjectId,
            ref: 'Person',
            required: false
        },
        fktCard: {
            type: Types.ObjectId,
            ref: 'FktCard',
            required: false
        },
    }
)

export const Person = model('Person', personSchema);
