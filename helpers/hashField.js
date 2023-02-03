const bcrypt = require('bcrypt');

const hashField = (field) => {
    // Hashear password
    const salt =  bcrypt.genSaltSync();
    return bcrypt.hashSync(field, salt);
}

module.exports = {
    hashField,
}