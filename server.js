const express=require('express')
const app=express()

//routes

app.get('/',(req,res)=>{
    res.send('Hello Guys')
})


app.listen(3000, ()=>{
    console.log('server is listening')
})
