import express from 'express'
const mongoose = require('mongoose')
require('dotenv/config')

const server=express();
const port=3030;

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