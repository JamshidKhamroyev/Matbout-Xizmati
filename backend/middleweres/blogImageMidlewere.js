const multer = require("multer");
const path = require("path");
const fs = require("fs")
const cloudinary = require("cloudinary").v2

// Rasm saqlash uchun multer sozlamalari
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = path.join(__dirname, "../blogImages");
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        cb(null, Math.random() + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });
module.exports = upload
