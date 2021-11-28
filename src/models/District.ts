import { Schema, model, Types } from "mongoose";

const districtSchema = new Schema(
    {
        _id: {
            type: Number,
        },
        region: {
            type: Number,
            ref: 'Region'
        },
        libellé: String
    }
)

export const District = model('District', districtSchema)