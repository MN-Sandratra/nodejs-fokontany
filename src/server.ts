require('dotenv/config')

const express = require('express')
const mongoose = require('mongoose')

const userRoute = require('./routes/user.route')
const fokontanyRoute = require('./routes/fokontany.route')
const communeRoute = require('./routes/commune.route')
const districtRoute = require('./routes/district.route')
const regionRoute = require('./routes/region.route')
const provinceRoute = require('./routes/province.route')
const fktCardRoute = require('./routes/fktCard.route')
const contributionRoute = require('./routes/contribution.route')
const personRoute = require('./routes/person.route')
const socialAidRoute = require('./routes/socialAid.route')

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
        server.use('/api/communes', communeRoute);
        server.use('/api/districts', districtRoute);
        server.use('/api/regions', regionRoute);
        server.use('/api/provinces', provinceRoute);
        server.use('/api/fktCard', fktCardRoute);
        server.use('/api/contribution', contributionRoute);
        server.use('/api/socialAid', socialAidRoute);
        server.use('/api/person', personRoute);
        
        server.get('/',(req,res)=>{
            res.send('Hello world')
        });

        server.listen(PORT, () => console.log(`server running at http://localhost:${PORT}`));
    })
    .catch((err) => console.log(err));