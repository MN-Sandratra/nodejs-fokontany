import { Schema, model, SchemaTypes } from "mongoose";

const provinceSchema = new Schema(
    {
        _id: {
            type: Number,
        },
        libellé: String
    }
)

export const Province = model('Province', provinceSchema)