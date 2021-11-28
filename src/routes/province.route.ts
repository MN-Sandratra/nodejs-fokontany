import express from 'express'
import { Province } from '../models/Province'

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        let q = req.query.q ? req.query.q : "";
        const dataList = await Province.find( { "libellé": { "$regex": q, "$options": "i" } }).limit(10);
        res.json(dataList)
    } catch (err) {
        res.json({ message : err })
    }
});

router.get('/:id', async (req, res) => {
    try {
        const dataList = await Province.findById(req.params.id)
        res.json(dataList)
    } catch (err) {
        res.json({ message : err })
    }
});

module.exports = router;
