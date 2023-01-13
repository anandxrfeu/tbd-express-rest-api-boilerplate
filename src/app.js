import express from "express"
import cors from "cors"
import dotenv from "dotenv/config"

const app = express()
const PORT = process.env.PORT || 5005

app.use(express.json())           
app.use(cors());

app.get('/', (req, res) => {
    return res.status(200).json({msg: "Hi"})
  })

app.listen(PORT, () => {
    console.log(`Api running on port ${PORT}`)
})