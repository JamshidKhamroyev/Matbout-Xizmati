const router = require("express").Router()
const BIbliagrafiyaController = require("../controllers/bibliografiyaController")

router.post("/create",  BIbliagrafiyaController.Create)
router.delete("/delete/:id", BIbliagrafiyaController.Delete)
router.get("/get-all", BIbliagrafiyaController.GetAll)

module.exports = router