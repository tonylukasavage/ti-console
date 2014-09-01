var console = require('ti-console'),
	should = require('should');
require('ti-mocha');

describe('ti-console', function() {

	it('exports modules', function() {
		should.exist(console);
	});

	it('exposes console functions', function() {
		console.log.should.be.a.Function;
		console.info.should.be.a.Function;
		console.warn.should.be.a.Function;
		console.dir.should.be.a.Function;
		console.time.should.be.a.Function;
		console.timeEnd.should.be.a.Function;
		console.trace.should.be.a.Function;
		console.assert.should.be.a.Function;
	});

});

mocha.run(function() {
	Ti.API.info('[TESTS COMPLETE]');
});