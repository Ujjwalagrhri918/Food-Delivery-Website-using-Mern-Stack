import express from "express"
import { addFood } from "../controllers/foodController.js"
import multer from "multer"  //used for uploading files
import { listFood, removeFood } from "../controllers/foodController.js";
const foodRouter = express.Router(); // mini express application


//Image Storage Engine

//determines how uploaded files are stored on the server's disk
const storage = multer.diskStorage({
    destination: "uploads",
    //function that determines the name of the uploaded file
    filename : (req,file,cb) => {
        //callback function with null as the error parameter (indicating no error) and the generated filename as the second parameter.
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/list", listFood)
foodRouter.post("/remove",removeFood)

export default foodRouter;