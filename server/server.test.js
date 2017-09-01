const request = require('supertest');
const expect = require('expect');
var app = require('./server').app;

describe('Server',()=>{
    describe('GET /',()=>{
        describe('some test case',()=>{
            it('should return Hello world response', (done)=>{
                request(app)
                .get('/')
                .expect(404)
                .expect((res)=>{
                    expect(res.body).toInclude({
                        error: 'Page not found.'
                    });
                })
                .end(done);
            });
        });
    });
    describe('GET/users',()=>{
        describe('some test case', ()=>{
            it('should return my users object', (done)=>{
                request(app)
                .get('/users')
                .expect(200)
                .expect((res)=>{
                    expect(res.body).toInclude({
                        name: 'Art',
                        age: 25
                    })
                })
                .end(done);
            });
        });
    });
});





