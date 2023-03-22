import { it, describe, expect } from 'vitest';
import { extractCurrencyValue } from './index.js';

describe('extractCurrencyValue', () => {
	it('should return the number 12 when provided the string "$12"', () => {
		expect(extractCurrencyValue('$12')).toBe(12);
	});
});
