const mongoose = require("mongoose");

const Country = new mongoose.Schema({
  name: String
})

const ProductionSchema = new mongoose.Schema({
        name: { type: String, required: true, unique: true },
        founder: {type: String, required: true},
        foundingdate: {type: Date, required: true},
        country:  [ Country
            //{
              // _id: {
              //   type: mongoose.Schema.Types.ObjectId,
              //   ref: "Country",
              //   required: true,
              // },
              // name: {
              //   type: String,
              //   required: true,
              //   unique: true
              // },
            //}
        ]
    }  
);

module.exports = mongoose.model("Production", ProductionSchema);