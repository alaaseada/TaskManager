// TO BE USED IN THE CONTROLLERS
// ================================

const mongoose = require("mongoose");

// Because Mongo documents can have any type and kind of properties 
// It would be a good idea if we define a schema for our data as long
// as we know how it will be structured.

// Mongoose schema does that. Fields are objects to deliver validation
const TaskSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, 'A name must be provided.'],
        trim: true,
        maxlength: [50, 'Name cannot be more than 50 characters.']
    },
    completed: {
        type: Boolean,
        default: false
    }
});

// The model is a representation for a collection (table) in Mongodb
// model is a wrapper for schema 
module.exports = mongoose.model('Task', TaskSchema);