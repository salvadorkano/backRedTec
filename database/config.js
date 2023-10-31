const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        mongoose.connect('mongodb+srv://itored2023:8x80FOzr7fhC5igx@redtec.gbyknj9.mongodb.net/');
        console.log("Conexión de base de datos establecida.")
    } catch (e) {
        console.log(e)
        throw new Error('Error en la conexión de la base de datos.')
    }
}

module.exports = {
    dbConnection
}