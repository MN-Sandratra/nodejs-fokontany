import { Schema, model, Types } from "mongoose";

const regionSchema = new Schema(
    {
        _id: {
            type: Number,
        },
        province: {
            type: Number,
            ref: 'Province'
        },
        libellé: String
    }
)

export const Region = model('Region', regionSchema)