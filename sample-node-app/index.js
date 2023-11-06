import express from 'express';



const app = express();


app.get('/',(req,res)=>{
    res.json({msg:'app running with docker'});
})

app.listen(5000,()=>{
    console.log('listening on port 5000');
})