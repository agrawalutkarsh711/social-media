const { Posts,Users }= require('../db/models')

async function createNewpost(userId,title,body){
    const post = Posts.create({
        title,
        body,
        userId
    })

    return post
}

async function showAllposts(){
    const posts = Posts.findAll({
        include:[Users]
    })
    return posts
}

module.exports={
    createNewpost,
    showAllposts
}

// async function task(){
//     // console.log(await createNewpost(1,'This is a sample post','This is the body of the post'))
//     // console.log(await createNewpost(2,'This is a second sample post','This is the body of the second post'))

//     console.log(await showAllposts())
// }
// task()