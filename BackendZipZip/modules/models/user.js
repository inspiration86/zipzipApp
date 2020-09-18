const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    mobile: { type: String },
    image: { type: String },
    email:{ type: String },
});
module.exports = mongoose.model('User', UserSchema);
