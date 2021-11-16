import express from 'express'
const mongoose = require('mongoose')
require('dotenv/config')

const server=express();
const port=3030;

const userRoute = require('./routes/user.route')

server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
server.use(express.json());
server.use(express.urlencoded({ extended: true }))

//middleware route
server.use('/api/users',userRoute);

server.get('/',(req,res)=>{
    res.send('Hello world')
});
async function startServer(){
    await mongoose.connect(process.env.CONNECTION_DB,
        {useNewUrlParser:true,
         useUnifiedTopology: true },
        ).then(()=>console.log("Connected to MongoDB Database"))
        .catch(()=>console.log("tsy mety eh"));
    server.listen(port,()=>console.log(
        `server running at http://localhost:${port}`
    ));
}

startServer();