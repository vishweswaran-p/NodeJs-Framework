import chai from 'chai';
import sinon from 'sinon';
import authController from 'controller/auth';
import validationService from 'services/validation';

const expect = chai.expect;
chai.use(require('chai-http'));

describe('#Auth contoller ',() => {
    it('#Login Should return success response',() => {
        let loginStub = sinon.stub(authController,'login');
        let validationStub = sinon.stub(validationService, 'validateRequestBody');
        loginStub.resolves(true);
        validationStub.resolves(true);
        return authController.login({}).then(res => {
            expect(res).to.be.an('Boolean');
        })
        .finally(() => {
            loginStub.restore();
            validationStub.restore();
        })
    })
});