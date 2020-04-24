const express = require("express");
const router = express.Router();
const heroesController = require("../controllers/heroesController");

router.get("/", heroesController.lista);
router.get("/detalle/:id", heroesController.detalle);
router.get("/:id/bio/:ok?", heroesController.bio);

module.exports = router;