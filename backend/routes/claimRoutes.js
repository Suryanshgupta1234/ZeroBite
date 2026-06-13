const express = require("express");
const router = express.Router();

const {
  createClaim,
  getMyClaims,
  approveClaim,
  getAllClaims,
} = require("../controllers/claimController");

const { protect } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

router.post(
  "/",
  protect,
  authorizeRoles("ngo"),
  createClaim
);

router.get(
  "/my-claims",
  protect,
  authorizeRoles("ngo"),
  getMyClaims
);

router.put(
  "/:id/approve",
  protect,
  authorizeRoles("donor"),
  approveClaim
);

router.get("/", getAllClaims);

module.exports = router;