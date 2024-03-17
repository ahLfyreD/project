const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const dataSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    // This is for the publish and draft
    status: {
        enum: ['publish', 'draft'],
        type: String,
        required: [true, 'please provide a status']
    },
    content: String,
    dateCreated: {type: Date, default: Date.now},
    dateUpdated: {type: Date, default: Date.now} 
})

module.exports = mongoose.model('data', dataSchema);