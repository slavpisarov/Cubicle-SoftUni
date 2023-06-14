const { MongooseError, Error } = require('mongoose')

exports.extractErrorMessages = (err) => {
    if(err instanceof MongooseError){
        return Object.values(err.errors).map(x => x.message);
    } else if(err){
        return [err.message]
    }
}