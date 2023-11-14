import mongoose from "mongoose";

export const BookSchema = mongoose.Schema({
    
    name :{
        type : String,
        required : true,
        trim : true,
    },

    slug : {
        type : String,
        trim : true,
        required : true,
    },

    status : {
        type : Boolean,
        default : true,
    },

},{
    timestamps : true,
});


export default mongoose.model("Book", BookSchema);