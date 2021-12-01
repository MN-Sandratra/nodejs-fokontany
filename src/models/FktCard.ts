import { Schema, model, Types } from 'mongoose';
import { Contribution } from './Contribution';

const fktCardSchema = new Schema(
    {
        fokontany: {
            type: Number,
            ref: 'Fokontany'
        },
        address : String,
        owner : {
            type: Types.ObjectId,
            ref: 'User',
            required: true
        }
    }
)

export const FktCard = model('FktCard', fktCardSchema);
