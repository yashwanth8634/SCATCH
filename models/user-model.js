import mongoose from "mongoose";

const userSchema = mongoose.Schema({
      fullname: String,
      email: String,
      password: String,
      contact: Number,
      cart: {
        type: Array,
        default: [],
      },
      orders: {
        type: Array,
        default: [],
      },
      profilepic: String,
});


const userModel = mongoose.model('user',userSchema);

export default userModel;