const router = require("express").Router();

const { getAllUsers, findUser } = require("../app/user/controller");

router.get("/", getAllUsers);
router.get("/:id", findUser);

module.exports = router;
