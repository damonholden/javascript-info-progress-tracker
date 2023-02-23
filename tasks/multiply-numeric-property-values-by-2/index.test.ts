import { describe, it, expect } from 'vitest';
import { multiplyNumeric } from './index.js';

describe('multiplyNumeric', () => {
	it('multiplies all numeric property values of an object by 2', () => {
		let menu = {
			width: 200,
			height: 300,
			title: 'my menu',
		};

		multiplyNumeric(menu);

		expect(menu).toEqual({
			width: 400,
			height: 600,
			title: 'my menu',
		});
	});
});
