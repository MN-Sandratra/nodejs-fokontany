import express from 'express'
import { Commune } from '../models/Commune';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        let q = req.query.q ? req.query.q : "";
        const dataList = await Commune.find( { "libellé": { "$regex": q, "$options": "i" } }).limit(10);
        res.json(dataList)
    } catch (err) {
        res.json({ message : err })
    }
});

router.get('/:id', async (req, res) => {
    try {
        const dataList = await Commune.findById(req.params.id)
        res.json(dataList)
    } catch (err) {
        res.json({ message : err })
    }
});

module.exports = router;
