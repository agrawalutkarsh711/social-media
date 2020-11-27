const route = require('express').Router()

const {
    showAllposts,
    createNewpost
} = require('../../controllers/posts')

route.get('/',async(req,res)=>{
    const posts = await showAllposts()
    res.status(200).send(posts)
})

route.post('/',async(req,res)=>{
    const {userId,title,body} = req.body

    if((!userId) || (!title) || (!body)){
        return res.status(400).send({
            error: "One of the following is missing . Either userId or title or body"
        })
    }

    const post = await createNewpost(userId,title,body)
    res.status(201).send(post)
})


route.use('/comments',require('./comments').route)

module.exports={
    route
}