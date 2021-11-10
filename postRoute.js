

const router =require('express').Router()
const {
getPost,
sngelGetPost,
allPost,
updatePost,
deletePost,

}= require('./postControlaer.js')

router.get('/',getPost)

  router.get('/:id',sngelGetPost)

  router.post('/',allPost)

   router.put('/:id',updatePost)

  router.delete ('/:id',deletePost)
  module.exports= router