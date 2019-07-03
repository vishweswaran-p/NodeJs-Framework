import chai from 'chai';
import authController from 'controller/auth';

const expect = chai.expect;
chai.use(require('chai-http'));

describe('#Auth contoller ',() => {
    it('#Login Should return success response',() => {
        let data = {
            "email":"vishnu@gmail.com",
            "password":"dsfdsfdsgdssd"
        };
        return authController.login(data)
        .then(res => {
            expect(res).to.equal('Login success');
        })
    })
});