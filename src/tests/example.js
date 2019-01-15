//import  expect  from 'chai';
const expect = require('chai').expect;


// A sample Mocha test
describe('Basic Maths', function () {
    it('1 should equal 1', function () {
        expect(1).to.equal(1);
    });
    it('1 != 0 Fail', function () {
        expect(0).to.equal(1);
    });
});
