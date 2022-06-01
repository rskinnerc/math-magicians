import calculate from './calculate';

describe('Testing calculate function', () => {
  test('when you press AC button it should return an object with null values', () => {
    const result = calculate({
      total: '2',
      next: '4',
      operation: '+',
    }, 'AC');
    expect(result.total).toBeNull();
    expect(result.next).toBeNull();
    expect(result.operation).toBeNull();
  });

  test('= button should return an object with value for total and null for both next and operation', () => {
    const result = calculate({
      total: '2',
      next: '4',
      operation: '+',
    }, '=');
    expect(result.total).toBe('6');
    expect(result.next).toBeNull();
    expect(result.operation).toBeNull();
  });

  test('+/- button should return an object with a reversed value for next', () => {
    const result = calculate({
      total: null,
      next: '4',
      operation: null,
    }, '+/-');
    expect(result.total).toBeNull();
    expect(result.next).toBe('-4');
    expect(result.operation).toBeNull();
  });

  test('+/- button should return an object with a reversed value for total', () => {
    const result = calculate({
      total: '-4',
      next: null,
      operation: null,
    }, '+/-');
    expect(result.total).toBe('4');
    expect(result.next).toBeNull();
    expect(result.operation).toBeNull();
  });

  test('+ button should return an object with a + value for operation', () => {
    const result = calculate({
      total: null,
      next: '5',
      operation: null,
    }, '+');
    expect(result.total).toBe('5');
    expect(result.next).toBeNull();
    expect(result.operation).toBe('+');
  });

  test('. button should return an object with . in the next value', () => {
    const result = calculate({
      total: null,
      next: '5',
      operation: null,
    }, '.');
    expect(result.total).toBeNull();
    expect(result.next).toBe('5.');
    expect(result.operation).toBeNull();
  });
});
