const AnnouncementModel = require("../models/announcementModel") 
const path = require("path");
const fs = require("fs");

class AnnouncementController {
    async Create(req, res){
        try {
            const {text, title} = req.body
            const images = req.files.map(file => file.filename)
            
            if(!text || !title){
                // 2️⃣ Rasmlarni `blogImages` papkasidan o‘chirish
                images.forEach(filename => {
                    const filePath = path.join(__dirname, "../announceImages", filename);
                    if (fs.existsSync(filePath)) {
                        fs.unlinkSync(filePath); // Faylni o‘chirish
                    }
                });
                return res.status(400).json({ok: false, message: `Siz barcha ma'lumotlarni kiritmadingiz!`})
            }

            if(images.length === 0){
                // 2️⃣ Rasmlarni `blogImages` papkasidan o‘chirish
                images.forEach(filename => {
                    const filePath = path.join(__dirname, "../announceImages", filename);
                    if (fs.existsSync(filePath)) {
                        fs.unlinkSync(filePath); // Faylni o‘chirish
                    }
                });
                return res.status(400).json({ok: false, message: `Siz barcha ma'lumotlarni kiritmadingiz!`})
            }

            const blog = await AnnouncementModel.create({text, title, image: images})
            if(!blog){
                // 2️⃣ Rasmlarni `blogImages` papkasidan o‘chirish
                images.forEach(filename => {
                    const filePath = path.join(__dirname, "../announceImages", filename);
                    if (fs.existsSync(filePath)) {
                        fs.unlinkSync(filePath); // Faylni o‘chirish
                    }
                });
                return res.status(400).json({ok: false, message: "Xatolik bo'ldi, Blog saqlanmadi!"})
            }

            res.json({ok: true, message: "E'lon qo'shildi!", data: blog})
        } catch (error) {
            // 2️⃣ Rasmlarni `blogImages` papkasidan o‘chirish
            req.files.forEach(filename => {
                const filePath = path.join(__dirname, "../announceImages", filename.filename);
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

            const blog = await AnnouncementModel.findById(id)
            if(!blog){
                return res.status(400).json({ok: false, message: "Siz xato so'rov yubordingiz!"})
            }

            // 2️⃣ Rasmlarni `blogImages` papkasidan o‘chirish
            blog.image.forEach(filename => {
                const filePath = path.join(__dirname, "../announceImages", filename);
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath); // Faylni o‘chirish
                }
            });

            // 3️⃣ Blogni bazadan o‘chirish
            await AnnouncementModel.findByIdAndDelete(id);
            res.status(200).json({ message: "Blog va rasmlar o‘chirildi!" });
        } catch (error) {
            res.status(400).json({ok: false, message: error.message})
        }
    }

    async GetAll(req, res){
        try {
            const blogs = await AnnouncementModel.find()
            res.json({ok: true, message: "Barcha bloglar olindi!", data: blogs})
        } catch (error) {
            res.status(400).json({ok: false, message: error.message})
        }
    }
}

module.exports = new AnnouncementController()