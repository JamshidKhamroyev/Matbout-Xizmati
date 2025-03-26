const blogModel = require("../models/blogModel") 
const path = require("path");
const fs = require("fs");
const jwt = require("jsonwebtoken");

class BlogController {
    async Create(req, res){
        try {
            const {text, video} = req.body
            const images = req.files.map(file => file.filename); // Fayl nomlarini olish 

            if(!text){
                // 2️⃣ Rasmlarni `blogImages` papkasidan o‘chirish
                req.files.forEach(filename => {
                    const filePath = path.join(__dirname, "../blogImages", filename);
                    if (fs.existsSync(filePath)) {
                        fs.unlinkSync(filePath); // Faylni o‘chirish
                    }
                });
                return res.status(400).json({ok: false, message: `Siz barcha ma'lumotlarni kiritmadingiz!`})
            }

            if(!video && images.length === 0){
                // 2️⃣ Rasmlarni `blogImages` papkasidan o‘chirish
                req.files.forEach(filename => {
                    const filePath = path.join(__dirname, "../blogImages", filename);
                    if (fs.existsSync(filePath)) {
                        fs.unlinkSync(filePath); // Faylni o‘chirish
                    }
                });
                return res.status(400).json({ok: false, message: `Siz barcha ma'lumotlarni kiritmadingiz!`})
            }

            let blog = ''

            if(images.length > 0){
                blog = await blogModel.create({text, image: images})
            }
            
            if(video){
                blog = await blogModel.create({text, video})
            }

            if(!blog){
                // 2️⃣ Rasmlarni `blogImages` papkasidan o‘chirish
                req.files.forEach(filename => {
                    const filePath = path.join(__dirname, "../blogImages", filename);
                    if (fs.existsSync(filePath)) {
                        fs.unlinkSync(filePath); // Faylni o‘chirish
                    }
                });
                return res.status(400).json({ok: false, message: "Xatolik bo'ldi, Blog saqlanmadi!"})
            }

            res.json({ok: true, message: "Blog qo'shildi!"})
        } catch (error) {
            // 2️⃣ Rasmlarni `blogImages` papkasidan o‘chirish
            req.files.forEach(filename => {
                const filePath = path.join(__dirname, "../blogImages", filename);
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath); // Faylni o‘chirish
                }
            });
            res.status(400).json({ok: false, message: error.message})
        }
    }

    async Delete(req, res){
        try {
            const {id} = req.params
            const blog = await blogModel.findById(id)
            if(!blog){
                return res.status(400).json({ok: false, message: "Siz xato so'rov yubordingiz!"})
            }

            // 2️⃣ Rasmlarni `blogImages` papkasidan o‘chirish
            blog.image.forEach(filename => {
                const filePath = path.join(__dirname, "../blogImages", filename);
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath); // Faylni o‘chirish
                }
            });

            // 3️⃣ Blogni bazadan o‘chirish
            await blogModel.findByIdAndDelete(id);
            res.status(200).json({ message: "Blog va rasmlar o‘chirildi!" });
        } catch (error) {
            res.status(400).json({ok: false, message: error.message})
        }
    }

    async GetAll(req, res){
        try {
            const blogs = await blogModel.find()
            res.json({ok: true, message: "Barcha bloglar olindi!", data: blogs})
        } catch (error) {
            res.status(400).json({ok: false, message: error.message})
        }
    }
}

module.exports = new BlogController()