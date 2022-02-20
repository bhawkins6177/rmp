import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    address: {type: String, required: false},
    admin: {type: Boolean, required: false},
    serviceDateTime: {type: Object, required: false},// this is for when I build the scheduleing system. Matbe store as an array of objects? 
    id: {type: String}

});

export default mongoose.model("User", userSchema);