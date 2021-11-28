import express from 'express'
import { Region } from '../models/Region';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        let q = req.query.q ? req.query.q : "";
        const dataList = await Region.find( { "libellé": { "$regex": q, "$options": "i" } }).limit(10);
        res.json(dataList)
    } catch (err) {
        res.json({ message : err })
    }
});

router.get('/:id', async (req, res) => {
    try {
        const dataList = await Region.findById(req.params.id)
        res.json(dataList)
    } catch (err) {
        res.json({ message : err })
    }
});

module.exports = router;
