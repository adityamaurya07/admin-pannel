import mongoose from "mongoose";

let url = "mongodb://127.0.0.1:27017/admin-test";

mongoose.connect(url);
console.log("connected");
