const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017')

const User = require('./user')

const createUser = async () => {
    try {
        const user = await User.create({name : 'ali' , age : 18 , email : "hiradsajde@gmail.com"})
    } catch (e) {
        console.log(e.message)
    } finally {
        console.log('done')
    }
}

createUser()