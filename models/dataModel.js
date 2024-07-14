const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  bidTimeList: {
    type: Array,
    default: [],
  },
  bikeMakeList: {
    type: Array,
    default: [],
  },
  carMakeList: {
    type: Array,
    default: [],
  },
  carFuelTypeList: {
    type: Array,
    default: [],
  },
  allCitiesList: {
    type: Array,
    default: [],
  },
  provinceList: {
    type: Array,
    default: [],
  },
  maharashtraCitiesList: {
    type: Array,
    default: [],
  },
  karnatakaCitiesList: {
    type: Array,
    default: [],
  },
  tamilNaduCitiesList: {
    type: Array,
    default: [],
  },
  uttarPradeshCitiesList: {
    type: Array,
    default: [],
  },
  rajasthanCitiesList: {
    type: Array,
    default: [],
  },
  northEastAreasList: {
    type: Array,
    default: [],
  },
  delhiSectorsList: {
    type: Array,
    default: [],
  },
  packages: [
    {
      name: {
        type: String,
        default: "",
      },
      price: {
        type: Number,
        default: 0,
      },
      productsAllowed: {
        type: Number,
        default: 0,
      },
      description: {
        type: String,
        default: "",
      },
    },
  ],
});

module.exports = mongoose.model("Data", dataSchema);
