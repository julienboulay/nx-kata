import { add } from './string-calculator';

describe('libsStringCalculator', () => {
  it('should return 0', () => {
    expect(add('')).toEqual(0);
  });
});
