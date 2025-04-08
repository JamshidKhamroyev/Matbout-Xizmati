const router = require("express").Router()
const AnnouncementController = require("../controllers/gazetaController")
const announcement = require("../middleweres/gazetaImageMidlewere")

router.post("/create",   announcement.single("image"),  AnnouncementController.Create)
router.delete("/delete/:id",  AnnouncementController.Delete)
router.get("/get-all", AnnouncementController.GetAll)


module.exports = router 