import { describe, it, expect } from 'vitest';

import { pow } from './pow';


describe('pow', () => {
	it('pow(2, 3) should return 8', () => {
		expect(pow(2, 3)).toEqual(8);
	});

	it('pow(3, 4) should return 81', () => {
		expect(pow(3, 4)).toEqual(81);
	});
});
