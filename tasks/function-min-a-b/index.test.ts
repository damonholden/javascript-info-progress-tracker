import { describe, expect, it } from 'vitest';
import {min} from './index.js';

describe('min', () => {
  it('should return min value', () => {
    expect(min(1, 2)).toEqual(1);
    expect(min(2, 1)).toEqual(1);
    expect(min(1, 1)).toEqual(1);
  });
});
