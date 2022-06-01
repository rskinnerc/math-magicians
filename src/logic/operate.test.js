import operate from './operate';

describe('The operate function', () => {
  it('should sum 2 + 3 and return 5', () => {
    expect(operate('2', '3', '+')).toBe('5');
  });

  it('should return 0 when we do 2 - 2', () => {
    expect(operate('2', '2', '-')).toBe('0');
  });

  it('should multiply 3 by 10 to be 30', () => {
    expect(operate('3', '10', 'x')).toBe('30');
  });

  it('should divide 10 in 5 to be 2 when passing ÷', () => {
    expect(operate('10', '5', '÷')).toBe('2');
  });

  it('should return 3 when 10 % 7', () => {
    expect(operate('10', '7', '%')).toBe('3');
  });

  it('should thrown an eror when no operation is passed', () => {
    expect(() => operate('1', '1')).toThrow("Unknown operation 'undefined'");
  });

  it('cannot divide by 0', () => {
    expect(operate('5', '0', '÷')).toBe("Can't divide by 0.");
  });

  it('cannot find module when dividing by 0', () => {
    expect(operate('5', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });
});
