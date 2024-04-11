require('dotenv').config();
const mongoose = require('mongoose');

const mongo_uri = process.env.MONGO;

const connect = async () => {
    try {
        await mongoose.connect(mongo_uri);
        console.log('MongoDB Connected');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err); // תוסיף עקידה כדי להדפיס את השגיאה במקרה של כישלון
    }
};

module.exports = {connect};
