const router =require('express').Router()

router.get('/login',(req, res)=>{
  res.send('I am a login router')
})
router.get('/logout',(req, res)=>{
  res.send('I am a logout router')
})
router.get('/sinup',(req, res)=>{
  res.send('I am a sinup router')
})
module.exports= router