const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const fs = require('fs')
const { urlencoded } = require('body-parser')
app.use(express.json())
app.use(urlencoded({extended: false}))
const  users = []

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

app.get('/users',(req,res) =>{
 res.json(users)


} )

app.post('/users', async(req, res) =>{
    try{
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        console.log(salt)
        console.log(hashedPassword)
        const user= { name: req.body.name,password: hashedPassword}
users.push(user)
res.status(201).send('Well Done')
    }
    catch{
        res.status(500).send('Well Done' )
}


})
app.post('/users/login',async(req, res) =>{
const user = users.find(user => user.name = req.body.name)
if(user == null){
  return res.status(400).send('Cannot Find User')

}
try{
 if (await bcrypt.compare(req.body.password, user.password)){
     res.send('Sucess')
 }
 else{
    res.send('Invalid Password')
 }




}

catch{
 res.status(500).send( )


}
})

app.listen(1200,()=>{
  console.log("Server Started");
})
