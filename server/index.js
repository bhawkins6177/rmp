import { Express } from "express";
import bodyParser from "body-parser";
import { Mongoose } from "mongoose";
import cors from 'cors'
// below the "main":"index.js" in .json file might have to add "type":"module"
 
const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true})); // incase they want to send/store images for clients, probs wont need 
app.use(bodyParser.urlencoded({limit: "30mb", extended: true})); 

app.use(cors());

