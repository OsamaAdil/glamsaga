const mongoose = require ('mongoose');
const {Schema} = mongoose;

let genreSchema = new Schema ({
    name: {
        type: String,
    },
    isDelete : {
        type : Boolean,
        default : false
    }
}, { timestamps: true });

let genre = mongoose.model("genre", genreSchema);
module.exports = genre;
