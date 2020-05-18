const app = require('../src/app');

describe('testing endpoint /', () => {
    it('GET / responds with 200',()=>{
        return supertest(app)
            .get('/')
            .expect(200)
    })
})