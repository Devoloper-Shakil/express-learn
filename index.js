
const express = require('express')
const userRouter = require('./router')
const postRouter = require('./postRoute')
const morgan = require('morgan')

const app = express() 
app.use(morgan('dev'));

const port = 5000

app.use('/user',userRouter)
app.use('/post',postRouter)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('*', (req, res) => {
    res.send('<h1>404 page Not Found</h1>')
  })
  


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
