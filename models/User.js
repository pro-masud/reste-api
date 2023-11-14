import mongoose from "mongoose";

const UserSchema = mongoose.Schema({

    name : {
        type : String,
        required : [true, "Name field is important"],
        trim : true,
        minLength : 5,
        maxLength : 15,
    },
 
    age : {
        type : Number,
        min : 18,
        max : 50,
        default : null,
    },

    gender : {
        type : String,
        enum : ['Male', "Female", 'Custom'],
        trim : true,
        default : null,
    },

    password : {
         type : String,
         trim : true,
         required : true,
    },

   cell : {
    type : String,
    trim : true,
    default : null,
   }, 
 
   email : {
    type : String,
    trim : true,
    required : true,
    unique : true,
   },
 
   location : {
    type : String,
    default : null,
    trim : true,
   },

   books : {
       type : [String],
       trim : true,
       default : [],
       value : 5,
   },

   team : {
    type : String,
    trim : true,
    default : null,
    value : 1,
},


    status : {
        type : Boolean,
        default : true,
    }, 

    trash : {
        type : Boolean,
        default : false,
    }
    
},{
    timestamps : true,
});

    
export default mongoose.model("User", UserSchema);