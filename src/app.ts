import express from "express";

const app = express();

app.get('/',(req,res, next)=>{
res.json({appName : " elib backend"})
})

export default app; 