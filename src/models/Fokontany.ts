import { Schema, model, Types } from "mongoose";

const fokontanySchema = new Schema(
    {
        _id: {
            type: Number,
        },
        commune: {
            type: Number,
            ref: 'Commune'
        },
        libellé: String
    }
)

export const Fokontany = model('Fokontany', fokontanySchema)