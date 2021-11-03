const mongoose = require("mongoose");

const ProductionSchema = new mongoose.Schema({
        name: { type: String, required: true, unique: true },
        founder: {type: String, required: true},
        foundingdate: {type: Date, required: true},
        country:  [
            {
              name: {
                type: String,
                required: true,
                unique: true
              },
            }
        ]
    }  
);

module.exports = mongoose.model("Production", ProductionSchema);