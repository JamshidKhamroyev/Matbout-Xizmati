const router = require("express").Router()
const blogController = require("../controllers/blogController")
const blogMidlewere = require("../middleweres/blogImageMidlewere")

router.post("/create", blogMidlewere.array("images", 4),  blogController.Create)
router.delete("/delete/:id", blogController.Delete)
router.get("/get-all", blogController.GetAll)

module.exports = router 