var console = require('ti-console');
require('ti-mocha');

describe('ti-console', function() {

	it('works', function() {
		'foo'.should.equal('foo');
	});

});

mocha.run(function() {
	console.log('[TESTS COMPLETE]');
});