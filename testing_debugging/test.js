const assert = require('assert');
const mocha = require('mocha');
const should = require('should');
const m = require('./mathfun');

// normal test
//assert.deepEqual -> the object must be the same
//assert.strictEqual -> is like ===
//assert.equal(m.evenDoublerSync(2), 4, 'Method return correct result'); -> is like ==


// IF YOU WANT TO RUN THIS WITHOUT INSTALLING MOCHA GLOBALLY
//YOU CAN SAVE MOCHA AS DEV DEPENDENCY AND RUN AS 
//node node_modules/.bin/mocha test.js


// Should

describe('math', () => {
    describe('syncro', () => {
        it('should double event numbers correctly', () => {
            m.evenDoublerSync(2).should.equal(4);
        });

        it('shuld throw exception', (d)=> {
            (() => {
                m.evenDoublerSync(3)
            }).should.throw(/Odd/);
            d();
        });
    });

    describe('async', () => {
        it('should double even number correctly', (done) => {
            m.evenDoubler(2, (err, results) => {
                should.not.exist(err);
                results.should.equal(4);
                done();
            });
        });

        it('should return error on odd numbers', (done) => {
            m.evenDoubler(3, (err, result) => {
                should.exist(err);
                should.not.exist(result);
                done();
            });      
        });
    });
});