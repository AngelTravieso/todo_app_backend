const { validationResult } = require("express-validator")

const dbValidators = (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    next();

}

const existeEmail = () => {

}

module.exports = {
    dbValidators,
    existeEmail,
}