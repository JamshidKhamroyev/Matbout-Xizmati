const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()
const rateLimit = require("express-rate-limit")
const blogRouter = require("./routers/blogRouter")
const GazetaRouter = require("./routers/gazetaRouter")
const MakonRouter = require("./routers/MakonRouter")
const BibliografiyaRouter = require("./routers/bibliografiyaRouter")

const limiter = rateLimit({
    windowMs: 1 * 1000,
    max: 80, 
    message: "Nosozlik yuz berdi! Iltimos keyinroq urinib ko'ring!"
});

const app = express()
app.use(limiter)
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Midleweres
app.use("/api/blog", blogRouter)
app.use("/api/makon", MakonRouter)
app.use("/api/gazeta", GazetaRouter)
app.use("/api/bibliografiya", BibliografiyaRouter)

app.use("/api/blog-images", express.static("./blogImages"))
app.use("/api/gazeta-images", express.static("./gazetaImage"))
app.use("/api/makon-images", express.static("./makonImages"))

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