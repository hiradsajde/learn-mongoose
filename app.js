const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017')

const User = require('./user')

const getUser = async () => {
    try {
        // const user = await User.findById('65895ef05aff094c06beef5b') // user selected by id :) 
        // const user = await User.find({name : 'ali'}) // user select by any data
        const user = await User.where("name").equals("hirad").select("name").populate("bestFriend").limit(2) // selected by mongodb syntax
        console.log(user)
    } catch(e) {
        console.error(e)
    }
}

getUser()