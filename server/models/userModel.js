import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    adress: {type: String, required: true},
    admin: {type: Boolean, required: true},
    serviceDateTime: {type: Object, required: false},// this is for when I build the scheduleing system. Matbe store as an array of objects? 
    id: {type: String}

});

export default mongoose.model("User", userSchema);