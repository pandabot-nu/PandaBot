const mongoose = require('mongoose');
module.exports =
    mongoose.connect(process.env.MONGODB_SRV, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    }
    )
