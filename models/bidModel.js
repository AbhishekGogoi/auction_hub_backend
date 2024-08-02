const mongoose = require("mongoose");

const bidSchema = new mongoose.Schema({
  //bidItem field stores an id that links to a document of the Product collection.
  bidItem: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
    required: true,
  },
  //bidders an array of objects where each object represents a bid made by a user
  bidders: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      price: {
        type: Number,
        required: [true, "Please enter your bid price"],
      },
      bidAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

/*
  **createBid Method Summary:**

  - **Purpose:** Adds a new bid (user and price) to the `bidders` array of the current Bid document.
  - **Process:**
    1. **Concatenates:** Uses `concat` to create a new array with the existing bidders plus the new bid.
    2. **Updates:** Sets `this.bidders` to the new array.
    3. **Returns:** The updated `bidders` array.
  - **Error Handling:** Catches and logs any errors during the process.
*/
bidSchema.methods.createBid = async function (user, price) {
  try {
    this.bidders = await this.bidders.concat({ user, price });
    return this.bidders;
  } catch (error) {
    console.log(error);
  }
};

module.exports = mongoose.model("Bid", bidSchema);
