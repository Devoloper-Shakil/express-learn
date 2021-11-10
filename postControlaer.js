exports.getPost=(req, res)=>{
    res.send('I am a olde post')
  }

exports.sngelGetPost=(req,res)=>{
     res.send("i am lesingng ="+ " "+ req.params.id)
  }

exports.allPost=(req, res)=>{
    res.send('I am a new post')
  }

exports.updatePost=(req, res)=>{
    res.send('update  new post ='+ '' + req.params.id)
  } 

exports.deletePost=(req, res)=>{
    res.send('delete  a old  post ='+ '' + req.params.id)
  }