import express from 'express'
import { Fokontany } from '../models/Fokontany';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        let q = req.query.q
        const fokontanys = await Fokontany.find( { "libellé": { "$regex": q, "$options": "i" } })
        res.json(fokontanys)
    } catch (err) {
        res.json({ message : err })
    }
});

router.get('/:id', async (req, res) => {
    try {
        const fokontanys = await Fokontany.findById(req.params.id)
        res.json(fokontanys)
    } catch (err) {
        res.json({ message : err })
    }
});

module.exports = router;
