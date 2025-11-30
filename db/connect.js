const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/dataxs', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB kết nối thành công!');
    } catch (error) {
        console.error('MongoDB kết nối thất bại:', error.message);
        process.exit(1);
    }
}

module.exports = { connect };
