const Donate = require("../models/donate.model");
const { StatusCodes } = require("http-status-codes");

const addDonate = async (req, res) => {
    const donate = await Donate.create(req.body );
    res.status(StatusCodes.CREATED).json({
        projectNumber:donate.projectNumber,
    });
}

module.exports = { addDonate };

// area: req.params.id,
        // projectNumber: req.body.title,
        // description: req.body.description,
        // priorityScore,
        // peopleCount,
        // nearestPoint,
        // estimatedCost,
        // currentAmount,
        // amountReqiured