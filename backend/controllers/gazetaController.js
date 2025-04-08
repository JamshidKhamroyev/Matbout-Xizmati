const AnnouncementModel = require("../models/gazetaModel") 
const path = require("path");
const fs = require("fs");

class GazetaController {
    async Create(req, res){
        try {
            const image = req.file ? req.file.filename : ""
            const {url} = req.body
            
            if(!url || !image){
                const filePath = path.join(__dirname, "../gazetaImage", image);
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath); // Faylni o‘chirish
                }
                return res.status(400).json({ok: false, message: `Siz barcha ma'lumotlarni kiritmadingiz!`})
            }

            const blog = await AnnouncementModel.create({url, image})
            if(!blog){
                    const filePath = path.join(__dirname, "../gazetaImage", image);
                    if (fs.existsSync(filePath)) {
                        fs.unlinkSync(filePath); // Faylni o‘chirish
                    }
                return res.status(400).json({ok: false, message: "Xatolik bo'ldi, Blog saqlanmadi!"})
            }

            res.json({ok: true, message: "Yangi gazeta qo'shildi!", data: blog})
        } catch (error) {
                const filePath = path.join(__dirname, "../gazetaImage", req.file.filename);
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath); // Faylni o‘chirish
                }
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

            const filePath = path.join(__dirname, "../gazetaImage", blog.image);
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath); // Faylni o‘chirish
            }

            await AnnouncementModel.findByIdAndDelete(id);
            res.status(200).json({ ok: true, message: "Gazeta o‘chirildi!" });
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

module.exports = new GazetaController()