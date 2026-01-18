import mongoose from "mongoose";

const ownerSchema = mongoose.Schema({
      fullname: String,
      email: String,
      password: String,
      products: {
        type: Array,
        default: [],
      },
      profilepic: String,
});


const ownerModel = mongoose.model('owner',ownerSchema);

export default ownerModel;