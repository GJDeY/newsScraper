var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var NoteSchema = new Schema({
    Title: String,
    Body: String
});
// creates model from schema using mongoose's model method
var Note = mongoose.model("Note", NoteSchema);
//export this model
module.exports = Note;