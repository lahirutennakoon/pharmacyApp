var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var prescriptionSchema = new Schema({
    _id: { type: objectId, auto: true },
    doctorName: { type: String, required: true },
    patientName: { type: String, required: true },
    patientAge: { type: Number, required: true },
    diagnosis: { type: String, required: true },
    date: { type: Date, required: true, default:Date.now },
    drug: {type: String, required: true},
    drugType: {type: String, required: true},
    dosage: {type: String, required: true}
});

var prescription = mongoose.model('prescriptions', prescriptionSchema);

module.exports = prescription;