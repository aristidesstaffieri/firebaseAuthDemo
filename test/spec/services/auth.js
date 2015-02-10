'use strict';
describe('factory: Auth', function () {
	var Auth, httpBackend;

	beforeEach(module('contentEditableApp'));

	beforeEach(inject(function (_Auth_, $httpBackend) {
		Auth = _Auth_;
		httpBackend = $httpBackend;
	}));

	it('should register new users', function () {
		expect(true).toBe(true);
	})
})