const express = require('express')
const app = express()
const path = require('path');
const bcrypt = require('bcrypt')
const fs = require('fs')
const { urlencoded } = require('body-parser')
const { generateFakeUserData, addVariation } = require('./functions/fakeuser')
app.use(express.json())
app.use(urlencoded({extended: false}))
const  users = []
app.use(express.static(path.join(__dirname, "src/public")));
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
   
const users = await generateFakeUserData(number)
 if (variations) {
  const newrow = addVariation(variations,users)
      res.json(newrow);
      return;
    }
      res.json(users);
  
} catch (e){}
 res.send(e).status(500);
 
}
)
app.listen(1200,()=>{
  console.log("Server Started");
})
