const mongoose = require("mongoose");

const donateSchema = new mongoose.Schema(
  {
     //   required: [true, "Please provide the description"],
    //   minlength: [5, "description too much small!"],
    //   required: [true, "Please provide the title"],
    area: {
      type: String,
      required: true,
    },
    projectNumber: {
      type: String,
      required: [true, "Please provide the project number"]
    },
    description: {
      type: String,
    },
    priorityScore: {
      type: Number,
    },
    peopleCount: {
        type: Number,
    },
    nearestPoint: {
        type: String,
        required: true,
    },
    estimatedCost: {
        type: Number,
    },
    currentAmount: {
        type: Number,
    },
    amountReqiured: {
        type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Donate", donateSchema);