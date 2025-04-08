const AnnouncementModel = require("../models/bibliografiyaModel") 

class BibliografiyaController {
    async Create(req, res){
        try {
            const {url, text} = req.body
            
            if(!url || !text){
                return res.status(400).json({ok: false, message: `Siz barcha ma'lumotlarni kiritmadingiz!`})
            }

            const bibliografiya = await AnnouncementModel.create({url, text})
            if(!bibliografiya){
                return res.status(400).json({ok: false, message: "Xatolik bo'ldi, pdf saqlanmadi!"})
            }

            res.json({ok: true, message: "PDF qo'shildi!", data: bibliografiya})
        } catch (error) {
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

            await AnnouncementModel.findByIdAndDelete(id);
            res.status(200).json({ ok: true, message: "PDF o‘chirildi!" });
        } catch (error) {
            res.status(400).json({ok: false, message: error.message})
        }
    }

    async GetAll(req, res){
        try {
            const blogs = await AnnouncementModel.find()
            res.json({ok: true, message: "Barcha PDF olindi!", data: blogs})
        } catch (error) {
            res.status(400).json({ok: false, message: error.message})
        }
    }
}

module.exports = new BibliografiyaController()