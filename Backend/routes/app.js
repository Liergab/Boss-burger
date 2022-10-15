const express = require('express')
const router= express.Router()

router.get('/index',(req, res, next) =>{
   res.render('index.ejs')
})

router.get('/login',(req, res, next) =>{
   const {name, age, gender} = req.query
    res.render('login.ejs',{
      data:[name,age,gender]
    });
 })

module.exports = router