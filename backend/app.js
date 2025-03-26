const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()
const rateLimit = require("express-rate-limit")
const blogRouter = require("./routers/blogRouter")
const announcementRoute = require("./routers/announcementRoute")


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// So'rov tezligini cheklash (Rate Limiting)
const limiter = rateLimit({
    windowMs: 1 * 1000, // 1 daqiqa
    max: 80, // Har bir IP uchun maksimal 100 ta so'rov
    message: "Nosozlik yuz berdi! Iltimos keyinroq urinib ko'ring!"
});

// Midleweres
app.use("/api/blog", blogRouter)
app.use("/api/announcement", announcementRoute)
app.use(limiter)

const startApp = async () => {
    const port = process.env.PORT
    try {
        app.listen(port, () => console.log(`Server running on localhost:${port}`))
        await mongoose.connect(process.env.MONGO_URL, {dbName: "Bloglar"}).then(() => console.log("Data Base connected succesfully")).catch(err => console.log(err))
    } catch (error) {
        return error.message
    }
}

startApp()