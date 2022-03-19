import checkHealth from '../unit_health';

test('check healthCheck healthy function', () => {
  const healthy = { name: 'Маг', health: 95 };
  const received = checkHealth(healthy);
  const expected = 'healthy';
  expect(received).toBe(expected);
});

test('check healthCheck wounded function', () => {
  const wounded = { name: 'Маг', health: 45 };
  const received = checkHealth(wounded);
  const expected = 'wounded';
  expect(received).toBe(expected);
});

test('check healthCheck critical function', () => {
  const critical = { name: 'Маг', health: 8 };
  const received = checkHealth(critical);
  const expected = 'critical';
  expect(received).toBe(expected);
});
