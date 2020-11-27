const {Users} = require('../db/models')

const {createrandomuser} = require('../utils/username')

async function createAnonuser(){

    const user = await Users.create({
        username:createrandomuser()
    })

    return user
}

async function getUserById(id){
    if(!NaN(id)){
        throw new Error("userid is not a number")
    }
    return Users.findOne({
        where:{id}
    })
}

async function getUserByUsername(username){
    return Users.findOne({
        where:{username}
    })
}

module.exports={
    createAnonuser,
    getUserById,
    getUserByUsername
}