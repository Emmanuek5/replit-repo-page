const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const fs = require('fs')
const { urlencoded } = require('body-parser')
const { generateFakeUserData } = require('./functions/fakeuser')
app.use(express.json())
app.use(urlencoded({extended: false}))
const  users = []
app.use(express.static("./public"))
app.get('/video', (req, res) =>
{
  res.render("./api1.mp4")
})
app.get('/user',(req, res) =>{
  res.render('node.ejs')
})
app.get('/', (req ,res) =>{
  res.render('index.ejs',)
})
app.get("/fake/users",async (req,res)=>{
try {
    const number = req.query.number 
    const variations = req.query.variations;
    if (!number) {
      res.send("Pls Provide A NUmber").status(400)
      return
    }
const data = await generateFakeUserData(number)
console.log( data.length)
    res.json(data)
} catch (e) {
  res.send(e).status(500)
}
})
app.listen(1200,()=>{
  console.log("Server Started");
})
