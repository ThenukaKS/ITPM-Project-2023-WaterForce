const Donate = require("../models/donate.model");
const { StatusCodes } = require("http-status-codes");

const addDonate = async (req, res) => {
    const donate = await Donate.create(req.body);
    res.status(StatusCodes.CREATED).json({
        area:donate.area,
        projectNumber:donate.projectNumber,
        nearestPoint:donate.nearestPoint,
    });
};
//get all donations
const getAllDonates = async (req, res) => {
  const donates = await Donate.find();
  if (!donates) {
    res.status(StatusCodes.OK).json({ msg: "No donations available!" });
  }
  res.status(StatusCodes.OK).json(donates);
};

//get a single donate
const getSingleDonation = async (req,res)=>{
    const donateId = req.params.id
    const donate = await Donate.findOne({ _id: donateId });
    res.status(StatusCodes.OK).json(donate);
}

module.exports = { addDonate,getAllDonates,getSingleDonation };

// area: req.params.id,
        // projectNumber: req.body.title,
        // description: req.body.description,
        // priorityScore,
        // peopleCount,
        // nearestPoint,
        // estimatedCost,
        // currentAmount,
        // amountReqiured