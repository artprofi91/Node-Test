const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app.js');



describe('App', ()=>{
    var db = {
        saveUser: expect.createSpy()
    };

    app.__set__('db', db);

    it('should call the spy correctly', ()=>{
        var spy = expect.createSpy();
        spy('Art', 25);
        expect(spy).toHaveBeenCalledWith('Art', 25);

    });

    it('should call saveUser with user object', ()=>{
        var email = 'art@gmail.com';
        var password = '12345art';


        app.handleSignup(email,password);

        expect(db.saveUser).toHaveBeenCalledWith({email,password});
    });
});