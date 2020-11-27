const route = require('express').Router()

const {
    showAllcomments,
    createComment
} = require('../../contollers/comments')

route.get('/',async (req,res)=>{
    const comments = await showAllcomments(req.query.postId)
    res.status(200).send(comments)
})

route.post('/',async(req,res)=>{
    const {userId,postId,title,body} = req.body
    if((!userId) || (!title) || (!body) ||(!postId)){
        return res.status(400).send({
            error: "One of the following is missing . Either  postId or userId or title or body "
        })
    }
    const comment = await createComment(userId,postId,title,body)
    res.status(201).send(comment)
})
module.exports={
    route
}