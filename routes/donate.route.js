const express = require("express");
const router = express.Router();
const {addDonate,getAllDonates} = require("../controller/donate.controller");

router.route("/").post(addDonate);
router.route("/").get(getAllDonates);

// router.route("/donate").get(addDonate);
// router.route("/:id/donate").delete(addDonate);
// router.route("/:id/donate").patch(addDonate);
// router.route("/:id/donate").post(addDonate);
// router.route("/donate").post(addDonate);
// router.route("/donate").post(addDonate);

module.exports = router;