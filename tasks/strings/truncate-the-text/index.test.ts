import { it, describe, expect } from 'vitest';
import { truncate } from './index.js';

describe('truncate', () => {
	it('truncate("this is not happening today", 12) should return "this is not…"', () => {
		expect(truncate({ str: 'this is not happening today', maxlength: 12 })).toEqual('this is not…');
	});

	it(`should not modify a string if it doesn't exceed the max length`, () => {
		expect(truncate({ str: 'but it could happen tomorrow', maxlength: 30 })).toEqual('but it could happen tomorrow');
	});
});
