import {formatCurrency} from '../scripts/utils/money.js';

describe('Test Suite - formatCurrency', function() {
  
  it('convert cents into dollars', function() {
    expect(formatCurrency(2095)).toEqual('20.95');
  });

  it('Works with Zero', function() {
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it('Rounds up to nearest cent', function() {
    expect(formatCurrency(2000.5)).toEqual('20.01');
  });

  it('Rounds down to nearest cent', function() {
    expect(formatCurrency(2000.4)).toEqual('20.00');
  });
});