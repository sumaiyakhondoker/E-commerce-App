import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/monogdb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/user.js';
import productRouter from './routes/product.js';

// App configuration
const app = express()
const port = process.env.PORT || 5000;
connectDB()
connectCloudinary()


// middlewares
app.use(express.json())
app.use(cors())

// API endpoints

app.use('/api/user', userRouter)
app.use('/api/product', productRouter)

app.get("/", (req, res)=>{
    res.send("API working")
})

app.listen(port, ()=>{
    console.log('Server started on PORT: ', port);
})