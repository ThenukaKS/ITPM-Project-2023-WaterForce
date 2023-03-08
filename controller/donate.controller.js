const Donate = require("../models/donate.model");
const { StatusCodes } = require("http-status-codes");

const addDonate = async (req, res) => {
    const donate = await Donate.create(req.body );
    res.status(StatusCodes.CREATED).json({
        area:donate.area,
        projectNumber:donate.projectNumber,
        nearestPoint:donate.nearestPoint,
        
    });

    //get all donations
const getAllDonates = async (req, res) => {
  const donates = await Donate.find({ projectNumber: req.params.id });

  if (!donates) {
    res.status(StatusCodes.OK).json({ msg: "No donations available!" });
  }
  res.status(StatusCodes.OK).json(donates);
};

  // 
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