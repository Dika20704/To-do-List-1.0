import express from 'express'
import dotenv from 'dotenv'
import {}

const app = express()
dotenv.config()
const port = process.env.PORT

app.get('/',(req,res) => res.send('server is runing'))
app.listen(port,()=>  console.log(`server port${port}`))