const mongoose = require ('mongoose');
const {Schema} = mongoose;

let genreSchema = new Schema ({
    name: {
        type: String,
    },

}, { timestamps: true });

let genre = mongoose.model("genre", genreSchema);
module.exports = genre;
