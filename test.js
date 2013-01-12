var client = require('./client').client;
var expect = require('chai').expect;

describe('Test example.com', function(){
    before(function(done){
        client.init();
        client.url('http://example.com', done);
    });

    describe('Check homepage', function(){
        it('should see the correct title', function(done){
            client.getTitle(function(title){
                expect(title).to.have.string('Example Domain');
                done();
            });
        });
    });

    after(function(done){
        client.end();
        done();
    });
});
