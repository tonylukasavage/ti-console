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
		console.error.should.be.a.Function;
		console.dir.should.be.a.Function;
		console.time.should.be.a.Function;
		console.timeEnd.should.be.a.Function;
		console.trace.should.be.a.Function;
		console.assert.should.be.a.Function;
	});

	it('invoke console.log', function() {
		console.log('test-log');
	});

	it('invoke console.info', function() {
		console.info('test-info');
	});

	it('invoke console.warn', function() {
		console.warn('test-warn');
	});

	it('invoke console.error', function() {
		console.error('test-error');
	});

	it('invoke console.time', function() {
		console.time('label');
	});

	it('invoke console.trace', function() {
		console.trace('test-trace');
	});

	it('invoke console.assert', function() {
		console.assert(true);
	});

	it('invoke console.dir', function() {
		console.dir('test-dir');
	});

	it('invoke console.timeEnd', function() {
		console.timeEnd('label');
	});

});

mocha.run(function() {
	Ti.API.info('[TESTS COMPLETE]');
});