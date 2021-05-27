import multer from "multer";
import path from "path";

export const multerConfig   = {
  dest: path.resolve(__dirname,"..","..", "uploads"),
  storage: multer.diskStorage({
  destination:(req,file,cb)=>{
      cb(null,path.resolve(__dirname,"..","..", "uploads"))
    },
    filename:(req,file,cb)=>{
      cb(null,file.originalname)
    },
  }),
  limits:{
    fileSize: 4 * 1024 * 1024
  },
  // fileFilter:(req:any,file:any,cb:any)=>{
  //   const allowedMimes = [
  //     'image/jpeg',
  //     'image/pjpeg',
  //     'image/png',
  //     'image/gif',
  //     'image/svg',
  //   ];
  //   if (allowedMimes.includes(file.mimetype)) {
  //     cb(null, true);
  //   } else {
  //     cb(new Error("Invalid file type."));
  //   }
  // }


 }
 
 