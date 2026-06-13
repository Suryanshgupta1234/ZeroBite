const express = require("express");
const router = express.Router();

const {
  createFood,
  getAllFood,
  getMyDonations,
} = require("../controllers/foodController");

const { protect } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

router.post(
  "/",
  protect,
  authorizeRoles("donor"),
  createFood
);

router.get("/", getAllFood);

router.get(
  "/my-donations",
  protect,
  authorizeRoles("donor"),
  getMyDonations
);

module.exports = router;