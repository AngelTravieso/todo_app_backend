const { response } = require("express");
const { User } = require('../models');
const { hashField } = require("../helpers");

const authTest = (req, res = response) => {

    res.json({
        msg: 'test auth',
    });

}

// Crear usuario
const createUser = async (req, res = response) => {

    const { name, email, password } = req.body;

    
    const user = new User({
        name,
        email,
        password,
    });
    
    user.password = hashField(password);

    // Insertar en la bd
    await user.save();

    res.json({ user });
}

module.exports = {
    authTest,
    createUser,
}