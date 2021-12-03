import express from "express";
import { isValidObjectId, Types } from "mongoose";

function isRelatedField(v: any) {
    let oid = "";
    if (isValidObjectId(v)) {
        oid = new Types.ObjectId(v).toString();
    }
    return oid === v ? true : false;
}

export default class Viewset {
    model: any
    router = express.Router()

    constructor(model) {
        this.model = model;

        this.router.get('/', async (req, res) => {
            try {
                const data = await this.model.find();
                res.json(data);
            } catch (err) {
                res.json({ message: err });
            }
        })
        
        this.router.get('/:id',async(req,res) => {
            try {
                const data = await this.model.findById(req.params.id);
                res.json(data);
            } catch (err) {
                res.json({ message: err});
            }
        })
        
        this.router.post('/', async (req, res) => {
            let rawData = {}
            Object.keys(req.body).forEach((k) => {
                if (isRelatedField(req.body[k])) {
                    rawData[k] = new Types.ObjectId(req.body[k]);
                } else {
                    rawData[k] = req.body[k]
                }
            });
            const newData = new this.model(rawData)
            try {
                const data = await newData.save();
                res.json(data)
            } catch (err) {
                res.json({ message: err })
            }
        });
        
        this.router.put('/:id', async (req, res) => {
            try {
                let rawData = {}
                Object.keys(req.body).forEach((k) => {
                    if (isRelatedField(req.body[k])) {
                        rawData[k] = new Types.ObjectId(req.body[k]);
                    } else {
                        rawData[k] = req.body[k]
                    }
                });
                const data = await this.model.updateOne(
                    { _id: req.params.id },
                    {
                        $set: rawData
                    }
                )
                res.json(data);
            } catch (err) {
                res.json({ message: err })
            }
        })
        
        this.router.delete('/:id', async (req, res) => {
            try {
                const data = await this.model.findByIdAndDelete({ _id: req.params.id })
                res.json(data);
            } catch (err) {
                res.json({ message: err });
            }
        })
    }
}