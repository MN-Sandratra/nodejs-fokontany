import { Schema, model, Types } from 'mongoose';

const contributionSchema = new Schema(
    {
        rationale: String,
        date: String,
        description: String,
        amount: Number,
        fktCard: {
            type: Types.ObjectId,
            ref: 'FktCard',
            required: true
        },
    }
)

export const Contribution = model('Contribution', contributionSchema);
