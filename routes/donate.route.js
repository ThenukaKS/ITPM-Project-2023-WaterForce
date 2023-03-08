const express = require("express");
const router = express.Router();
const {addDonate} = require("../controller/donate.controller");

router.route("/").post(addDonate);


// router.route("/donate").get(addDonate);
// router.route("/:id/donate").delete(addDonate);
// router.route("/:id/donate").patch(addDonate);
// router.route("/:id/donate").post(addDonate);
// router.route("/donate").post(addDonate);
// router.route("/donate").post(addDonate);

module.exports = router;