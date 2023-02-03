const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONN);

        console.log('BD Connected');
    } catch(error) {
        console.log(error);
        throw new Error('Error al conectarse a la BD');
    }
}

module.exports = {
    dbConnection,
}