const router = require("express").Router()
const blogController = require("../controllers/blogController")
const adminMidlewere = require("../middleweres/adminMiddlewere")
const blogMidlewere = require("../middleweres/blogImageMidlewere")

router.post("/create", adminMidlewere, blogMidlewere.array("images", 2),  blogController.Create)
router.delete("/delete/:id", adminMidlewere, blogController.Delete)
router.get("/get-all", adminMidlewere, blogController.GetAll)

module.exports = router 