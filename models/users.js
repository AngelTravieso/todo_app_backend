const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
    },
    email: {
        type: String,
        required: [true, 'El email es obligatorio'],
    },
    password: {
        type: String,
        required: [true, 'El password es obligatorio'],
    },
    date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: Boolean,
        default: true,
    },
    google: {
        type: Boolean,
        default: false,
    },
});

UserSchema.methods.toJSON = function() {

    // Extraer (no devolver)
    const { __v, password, _id, ...user } = this.toObject();

    return user;

}

module.exports = model('User', UserSchema);