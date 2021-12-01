import { Schema, model, Types } from 'mongoose';

const socialAidSchema = new Schema(
    {
        rationale: String,
        date: String,
        description: String,
        fktCard: {
            type: Types.ObjectId,
            ref: 'FktCard',
            required: true
        },
    }
)

export const SocialAid = model('SocialAid', socialAidSchema);
