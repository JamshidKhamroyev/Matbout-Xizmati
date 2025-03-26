const router = require("express").Router()
const AnnouncementController = require("../controllers/announcementController")
const adminMidlewere = require("../middleweres/adminMiddlewere")
const announcement = require("../middleweres/announcementMidlewere")


router.post("/create", adminMidlewere, announcement.array("images", 3),  AnnouncementController.Create)
router.delete("/delete/:id", adminMidlewere, AnnouncementController.Delete)
router.get("/get-all", adminMidlewere, AnnouncementController.GetAll)


module.exports = router 