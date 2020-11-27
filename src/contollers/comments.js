const {Posts,Users,Comments}= require('../db/models')

async function showAllcomments(postId){
    console.log(postId)
    let comments = Comments.findAll({
        where:{postId},
        include : [Posts,Users]
    })
    return comments;
}

async function createComment(userId,postId,title,body){
    const comment = Comments.create({
        userId,
        postId,
        title,
        body
    })

    return comment;
}

module.exports = {
    showAllcomments,
    createComment
}