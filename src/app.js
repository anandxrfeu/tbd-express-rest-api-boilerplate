import express from "express"
import cors from "cors"
import dbConnect from "./config/db.config.js"
import dotenv from "dotenv/config"

import userRouter from "./routes/user.routes.js"
import fileRouter from "./routes/file.router.js"

const app = express()
const PORT = process.env.PORT || 5005

dbConnect()

app.use(express.json())           
app.use(cors());

app.get('/', (req, res) => {
    return res.status(200).json({msg: "Api is LIVE!!"})
})

app.use("/api", userRouter)
app.use("/api", fileRouter)

app.listen(PORT, () => {
    console.log(`Api running on port ${PORT}`)
})