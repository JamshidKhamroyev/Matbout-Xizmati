const MakonModel = require("../models/MakonModel") 
const path = require("path");
const fs = require("fs");

class MakonController {
    async Create(req, res){
        try {
            const image = req.file ? req.file.filename : undefined
            const {text} = req.body
            
            if(!text || !image){
                const filePath = path.join(__dirname, "../makonImages", image);
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                }
                return res.status(400).json({ok: false, message: `Siz barcha ma'lumotlarni kiritmadingiz!`})
            }

            const blog = await MakonModel.create({text, image})
            if(!blog){
                    const filePath = path.join(__dirname, "../makonImages", image);
                    if (fs.existsSync(filePath)) {
                        fs.unlinkSync(filePath);
                    }
                return res.status(400).json({ok: false, message: "Xatolik bo'ldi, Blog saqlanmadi!"})
            }

            res.json({ok: true, message: "Yangi blog qo'shildi!", data: blog})
        } catch (error) {
                const filePath = path.join(__dirname, "../makonImages", req.file.filename);
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                }
            res.status(400).json({ok: false, message: error.message})
        }
    }

    async Delete(req, res){
        try {
            const {id} = req.params
            const blog = await MakonModel.findById(id)
            if(!blog){
                return res.status(400).json({ok: false, message: "Siz xato so'rov yubordingiz!"})
            }

            const filePath = path.join(__dirname, "../makonImages", blog.image);
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
            }

            await MakonModel.findByIdAndDelete(id);
            res.status(200).json({ message: "Blog va rasmlar o‘chirildi!" });
        } catch (error) {
            res.status(400).json({ok: false, message: error.message})
        }
    }

    async GetAll(req, res){
        try {
            const blogs = await MakonModel.find()
            res.json({ok: true, message: "Barcha bloglar olindi!", data: blogs})
        } catch (error) {
            res.status(400).json({ok: false, message: error.message})
        }
    }
}

module.exports = new MakonController()