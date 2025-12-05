import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app=express()
app.use(cors({
    origin : process.env.PORT,
    credentials:true
}))

app.use(express.json({limit:"2mb"}))
app.use(express.urlencoded({extended:true,limit:"5mb"}))
app.use(express.static("public"))//essential for public folder access
app.use(cookieParser())


// routes import
import userRouter from './routes/user.routes.js'

//routes declaration
app.use("/api/v1/user",userRouter)

// http://localhost:8000/api/v1/user/register


export{app}
