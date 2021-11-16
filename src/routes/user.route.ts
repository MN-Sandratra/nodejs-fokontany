import express from "express";
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.json({ message: err });
    }
})

router.get('/:id',async(req,res) => {
    try {
        const selectedUser= await User.findById(req.params.id);
        res.json(selectedUser);
    } catch (err) {
        res.json({ message: err});
    }
})

router.post('/', async (req, res) => {
    const user = new User({
        lastname: req.body.lastname,
        firstname: req.body.firstname,
        phone: req.body.phone,
        email:req.body.email,
        address: req.body.address,
        fokontany: req.body.fokontany,
        cin:req.body.cin,
        sex: req.body.sex,
        maritalStatus:req.body.maritalStatus,
        username: req.body.username,
        password: req.body.password
    })
    try {
        const savedUser = await user.save();
        res.json(savedUser)
    } catch (err) {
        res.json({ message: err })
    }
});

router.put('/:id', async (req, res) => {
    try {
        const userUpdate = await User.updateOne(
            { _id: req.params.id },
            {
                $set: {
                    lastname: req.body.lastName,
                    firstname: req.body.firstName,
                    phone: req.body.phone,
                    email:req.body.email,
                    address: req.body.address,
                    fokontany: req.body.fokontany,
                    cin:req.body.cin,
                    sex: req.body.sex,
                    maritalstatus:req.body.maritalStatus,
                    username: req.body.username,
                    password: req.body.password
                }
            }
        )
        res.json(userUpdate);
    } catch (err) {
        res.json({ message: err })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deleteUser = await User.findByIdAndDelete({ _id: req.params.id })
        res.json(deleteUser);
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = router;

