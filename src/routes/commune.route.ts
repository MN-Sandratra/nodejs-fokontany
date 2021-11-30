import express from 'express'
import communes from '../data/communes';

const router = express.Router();
const dataset = communes;

router.get('/', async (req, res) => {
    try {
        let q = req.query.q ? req.query.q.toString() : "";
        const dataList = dataset.filter(function (data){
            if (this.count < 10 && data.libellé.startsWith(q.toUpperCase())) {
                this.count++;  
                return true;
            }
            return false; 
        }, {count: 0});
        res.json(dataList)
    } catch (err) {
        console.log(dataset)
        res.json({ message : err })
    }
});

router.get('/:id', async (req, res) => {
    try {
        const data = dataset.find((f) => f._id === parseInt(req.params.id))
        res.json(data)
    } catch (err) {
        res.json({ message : err })
    }
});

module.exports = router;
