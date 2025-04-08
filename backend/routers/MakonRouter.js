const router = require("express").Router()
const MakonController = require("../controllers/MakonController")
const upload = require("../middleweres/makonMidlewer")

router.post("/create",  upload.single("image"),  MakonController.Create)
router.delete("/delete/:id",  MakonController.Delete)
router.get("/get-all", MakonController.GetAll)

module.exports = router 