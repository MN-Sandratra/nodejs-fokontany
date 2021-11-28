require('dotenv/config')

const express = require('express')
const mongoose = require('mongoose')
const userRoute = require('./routes/user.route')
const fokontanyRoute = require('./routes/fokontany.route')

const PORT = 3030;

mongoose.connect(process.env.CONNECTION_DB, {useNewUrlParser:true, useUnifiedTopology: true})
    .then(() => {
        const server = express();
        console.log("Connected to MongoDB Database")

        server.use((req, res, next) => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
            next();
        });
        server.use(express.json());
        server.use(express.urlencoded({ extended: true }))

        server.use('/api/users', userRoute);
        server.use('/api/fokontany', fokontanyRoute);
        
        server.get('/',(req,res)=>{
            res.send('Hello world')
        });

        server.listen(PORT, () => console.log(`server running at http://localhost:${PORT}`));
    })
    .catch((err) => console.log(err));