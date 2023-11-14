import multer from "multer";



    const storage = multer.diskStorage({
        
        destination : (req, file, cb) =>{
            if(file.fieldname === "teacherPhoto"){
                cb(null, "public/teacher")
            }
        },
        
        filename : (req, file, cb) =>{

            cb(null, Date.now(new Date()) + "_" +  file.originalname);
        }, 
 

    }); 


export const TeacherPhoto = multer({storage}).single("teacherPhoto");