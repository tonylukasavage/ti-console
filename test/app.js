var console = require('ti-console'),
	should = require('should');
require('ti-mocha');

describe('ti-console', function() {

	it('works', function() {
		1.should.equal(1);
	});

});

var runner = mocha.run(function() {
	console.log('[TESTS COMPLETE]');
});