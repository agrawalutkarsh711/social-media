const { expect } = require('chai')

const {
    createAnonuser,
    getUserById,
    getUserByUsername    
} = require('../../src/controllers/users')

describe('controllers/users',()=>{
    it('should create anonymous user', async ()=>{
        const user = await createAnonuser()
        expect(user).to.have.property('username')
        expect(user.id).to.be.a('number')
    })
})