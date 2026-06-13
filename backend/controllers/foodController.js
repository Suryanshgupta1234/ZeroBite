const Food = require("../models/Food");

const createFood = async (req, res) => {
    try {
        const {
            foodName,
            quantity,
            expiryTime,
            pickupAddress,
            foodImage,
        } = req.body;

        const food = await Food.create({
            foodName,
            quantity,
            expiryTime,
            pickupAddress,
            foodImage,
            donor: req.user._id,
        });

        res.status(201).json(food);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const getAllFood = async (req, res) => {
    try {
        const foods = await Food.find()
            .populate("donor", "name email")
            .sort({ createdAt: -1 });

        res.json(foods);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const getMyDonations = async (req, res) => {
    try {
        const foods = await Food.find({
            donor: req.user._id,
        }).sort({ createdAt: -1 });

        res.json(foods);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    createFood,
    getAllFood,
    getMyDonations,
};