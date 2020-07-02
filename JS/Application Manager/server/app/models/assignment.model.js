const mongoose = require('mongoose')
const { Schema, model: Model} = mongoose
const { String, Number, ObjectId, Boolean} = Schema.Types

module.exports = mongoose => {
    var schema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        preferredCommunication: {
            type: String,
            required: true
        },
        englishLevel: {
            type: String,
            required: true
        },
        availableToStart: {
            type: Date,
            required: true
        },
        skills: {
            type: String
        },
        presentation: {
            type: String
        },
        studyFromHome: {
            type: Boolean
        }
    }, {
        timestamps: true
    });

    schema.method("toJSON", function () {
        const {
            __v,
            _id,
            ...object
        } = this.toObject();
        object.id = _id;
        return object;
    });

    const Assignment = mongoose.model("assignment", schema);
    return Assignment;
};