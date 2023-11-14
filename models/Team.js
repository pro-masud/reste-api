import mongoose from "mongoose";


const TeamSchema = mongoose.Schema({
    
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

export default mongoose.model("Team", TeamSchema);