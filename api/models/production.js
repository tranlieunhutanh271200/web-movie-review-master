const mongoose = require("mongoose");


// const Country = new mongoose.Schema({
//   name: String
// })

const ProductionSchema = new mongoose.Schema({
        name: { type: String, required: true, unique: true },
        founder: {type: String, required: true},
        foundingdate: {type: Date, required: true},
    },
    {
      timestamps: true
    }
);

module.exports = mongoose.model("Production", ProductionSchema);