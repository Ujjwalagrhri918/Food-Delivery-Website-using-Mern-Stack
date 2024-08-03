import mongoose from "mongoose";


const foodSchema = new mongoose.Schema({
    name : {type : String, required : true},
    description : {type : String, required : true},
    price : {type : Number, required : true},
    image : {type : String, required : true},
    category : {type : String, required : true}
})

//If there's already a model named "food" registered with Mongoose, it uses that model 
const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);

export default foodModel;