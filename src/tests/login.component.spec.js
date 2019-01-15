const reflect = require('reflect-metadata');
const expect = require('chai').expect;

const LoginComponent = require('../app/login/login.component');
const Router = require('@angular/router');
const Page = require('tns-core-modules/ui/page');

describe('Basic Maths', function () {
    let loginComponent;
    let page;
    let router;

    beforeEach(function() {
        page = new Page();
        router = new Router();
        loginComponent = new LoginComponent.LoginComponent(router, page);
    });

    it('email should fazza128@me.com', function () {
        expect(loginComponent.email).to.equal('fazza128@me.com');
    });
    it('Password should default to password', function () {
        expect(loginComponent.password).to.equal('password');
    });
});
