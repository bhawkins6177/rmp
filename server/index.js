import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors'
import userRoutes from './routes/users.js'
// below the "main":"index.js" in .json file might have to add "type":"module"
 
const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true})); // incase they want to send/store images for clients, probs wont need 
app.use(bodyParser.urlencoded({limit: "30mb", extended: true})); 

app.use(cors());

app.use('/user', userRoutes);

const CONNECTION_URL = 'mongodb+srv://bhawkins6177:noodle67@cluster0.jyonl.mongodb.net/rmp?retryWrites=true&w=majority'


const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`)))
    .catch((err)=> console.log(err.message));

//mongoose.set('useFindAndModify', false)// spitsout an  error, I believe the newest update to mongoose made its default set to false

