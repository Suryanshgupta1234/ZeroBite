const Claim = require("../models/Claim");
const Food = require("../models/Food");

const createClaim = async (req, res) => {
  try {
    const { foodId } = req.body;

    const food = await Food.findById(foodId);

    // Check food exists first
    if (!food) {
      return res.status(404).json({
        message: "Food not found",
      });
    }

    console.log(
      "Food Donor:",
      food.donor.toString()
    );

    console.log(
      "Current User:",
      req.user._id.toString()
    );

    // Prevent claiming own donation
    if (
      food.donor.toString() ===
      req.user._id.toString()
    ) {
      return res.status(400).json({
        message:
          "You cannot claim your own food",
      });
    }

    // Check status
    if (food.status !== "available") {
      return res.status(400).json({
        message:
          "Food already claimed",
      });
    }

    // Check if already claimed by this NGO
    const existingClaim =
      await Claim.findOne({
        food: foodId,
        ngo: req.user._id,
      });

    if (existingClaim) {
      return res.status(400).json({
        message:
          "You have already claimed this food",
      });
    }

    // Create claim
    const claim = await Claim.create({
      food: foodId,
      ngo: req.user._id,
    });

    // Update food status
    food.status = "claimed";
    await food.save();

    res.status(201).json({
      message:
        "Food claimed successfully",
      claim,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

const getMyClaims = async (req, res) => {
  try {
    const claims = await Claim.find({
      ngo: req.user._id,
    })
      .populate("food")
      .sort({ createdAt: -1 });

    res.json(claims);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const approveClaim = async (req, res) => {
  try {
    const claim =
      await Claim.findById(
        req.params.id
      );

    if (!claim) {
      return res.status(404).json({
        message: "Claim not found",
      });
    }

    claim.status = "approved";

    await claim.save();

    res.json({
      message:
        "Claim approved successfully",
      claim,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getAllClaims = async (req, res) => {
  try {
    const claims = await Claim.find()
      .populate("food")
      .populate(
        "ngo",
        "name email"
      );

    res.json(claims);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createClaim,
  getMyClaims,
  approveClaim,
  getAllClaims,
};