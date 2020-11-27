const Sequelize = require('sequelize')

const db = new Sequelize('socialapp','appuser','mypass',{
    host:'localhost',
    dialect:'mysql'
})

const DEF_ID = {
    type:Sequelize.INTEGER,
    primaryKey:true,
    autoIncrement:true
} 

const DEF_TITLE={
    type:Sequelize.STRING(140),
    allowNUll:false
}

const Users = db.define('user',{
    id:DEF_ID,
    username:{
        type:Sequelize.STRING(30),
        allowNUll:false,
        unique:true
    }
})

const Posts = db.define('post',{
    id:DEF_ID,
    title:DEF_TITLE,
    body:{
        type:Sequelize.TEXT,
        allowNUll:false
    }
})

const Comments = db.define('comment',{
    id:DEF_ID,
    title:DEF_TITLE,
    body:{
        type:Sequelize.TEXT('tiny')
    }
})

Users.hasMany(Posts)
Posts.belongsTo(Users)

Users.hasMany(Comments)
Comments.belongsTo(Users)

Posts.hasMany(Comments)
Comments.belongsTo(Posts)

module.exports={
    db,
    Users,
    Posts,
    Comments
}