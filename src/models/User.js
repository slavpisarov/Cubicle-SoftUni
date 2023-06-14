const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        minLength: [5,'Username must be at least 5 characters long'],
        match: [/^[A-za-z0-9]+$/, 'Username must be alphanumeric'],
        unique: [
            true,
            'Username already exists',
        ],
    },
    password:{ 
        type: String,
        required: [true, 'Password is required'],
        minLength: [8,'Password must be at least 8 characters long'],
        validate: {
            validator: function(value){
                return /^[A-za-z0-9]+$/.test(value);
            },
            message:'Invalid password characters!'
        },
    },
});

userSchema.virtual('repeatPassword')
    .set(function(value){
        if(value !== this.password){
            throw new Error('Password missmatch!');
        }
    });

userSchema.pre('save', async function(){
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
})

const User = mongoose.model('User', userSchema);

module.exports = User;