import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/welcome',(req,res)=>{
    res.status(200).json({message:"Hi welcome to angular js assignment"});
})

app.listen(3000,()=>{
    console.log("Listening on 3000")
})