const mongoose = require("mongoose");

// In Mongoose (and in general in programming), the enum property is used to define a set of predefined values that a particular field can take. This helps in constraining the values of the field to a specific set and ensures data integrity by enforcing these constraints.
const productSchema = new mongoose.Schema({
  tag: {
    type: String,
    default: "Normal",
    enum: ["Normal", "Hot", "Super Hot"],
  },
  status: {
    type: String,
    default: "Pending",
    enum: ["Pending", "Approved", "Rejected"],
  },
  title: {
    type: String,
    required: [true, "Please Enter product Name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Enter product Description"],
  },
  furnished: {
    type: String,
    enum: ["Furnished", "Unfurnished"],
  },
  bedrooms: {
    type: String,
  },
  bathrooms: {
    type: String,
  },
  noOfStoreys: {
    type: String,
  },
  constructionState: {
    type: String,
    enum: ["Grey Structure", "Finished"],
  },
  type: {
    type: String,
    // enum:["Office","Shop","Warehouse","Factory","Building"]
  },
  features: [
    {
      type: String,
    },
  ],
  make: {
    type: String,
  },
  model: {
    type: String,
  },
  year: {
    type: Number,
  },
  kmsDriven: {
    type: Number,
  },
  fuelType: {
    type: String,
  },
  floorLevel: {
    type: String,
  },
  areaUnit: {
    type: String,
    enum: ["Kanal", "Marla", "Square Feet", "Square Meter", "Square Yards"],
  },
  area: {
    type: Number,
  },
  price: {
    type: Number,
    required: [true, "Please Enter product Price"],
    maxLength: [10, "Price cannot exceed 10 digits"],
  },
  images: {
    featuredImg: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    imageOne: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    imageTwo: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    imageThree: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  },
  category: {
    type: String,
    required: [true, "Please Enter Product Category"],
    enum: ["Property", "Vehicles", "MiscProducts"],
  },
  subCategory: {
    type: String,
    required: [true, "Please Enter Product Sub-Category"],
    enum: [
      "Land & Plots",
      "Houses",
      "Apartments & Flats",
      "Shops - Offices - Commercial Space",
      "Portions & Floors",
      "Cars",
      "Bikes",
      "Buses, Vans & Trucks",
      "Rickshaw & Chingchi",
      "Tractors & Trailer",
      "Other Vehicles",
      "Other Products",
    ],
  },
  location: {
    province: {
      type: "String",
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  bidStatus: {
    type: String,
    required: true,
    default: "Live",
    enum: ["Live", "Pending", "Expired"],
  },
  bidTime: {
    type: String,
    required: [true, "Please specify your bid time"],
  },
  endDate: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//Calculating End Date
// The pre("save") middleware function in Mongoose is used to perform operations before a document is saved to the database. In your productSchema, this middleware is specifically designed to calculate and set the endDate for the product based on the bidTime field.
// Pre-save middleware to calculate and set the `endDate` field for the product
productSchema.pre("save", async function (next) {
  // Check if the `bidTime` field has been modified
  if (!this.isModified("bidTime")) {
    // If `bidTime` is not modified, skip the calculation and proceed with saving the document
    next();
  }

  // Calculate `endDate` based on the current date and the value of `bidTime`
  // `bidTime` is assumed to be in days
  // Proceed with the save operation after setting `endDate`
  this.endDate = new Date(
    new Date().getTime() + Number(this.bidTime) * 24 * 60 * 60 * 1000
  );
});

module.exports = mongoose.model("Product", productSchema);
