const mongoose = require("mongoose");

const InternSchema = new mongoose.Schema({
    internId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
    type: String,
    required: true,
    unique: true
    },
    phone: String,
    college: String,
    branch: String,
    skills: [String],
    projects: [String],
    status: {
        type: String,
        default: "Active"
    },
    joiningDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Intern", InternSchema);