const router = require("express").Router()
const blogController = require("../controllers/blogController")
const adminMidlewere = require("../middleweres/adminMiddlewere")
const blogMidlewere = require("../middleweres/blogImageMidlewere")
const jwt = require("jsonwebtoken")

router.post("/generateToken", (req, res) => {
    const {data} = req.body
    const token = jwt.sign({id: data}, process.env.JWT_SECRET, {expiresIn: "1y"})
    res.json({token: token})
})
router.post("/create", adminMidlewere, blogMidlewere.array("images", 3),  blogController.Create)
router.delete("/delete/:id", adminMidlewere, blogController.Delete)
router.get("/get-all", adminMidlewere, blogController.GetAll)
router.delete("/all-del", adminMidlewere, blogController.DeleteAll)

module.exports = router 