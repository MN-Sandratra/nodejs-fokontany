import { Schema, model, Types } from "mongoose";

const communeSchema = new Schema(
    {
        _id: {
            type: Number,
        },
        district: {
            type: Number,
            ref: 'District'
        },
        libellé: String
    }
)

export const Commune = model('Commune', communeSchema)