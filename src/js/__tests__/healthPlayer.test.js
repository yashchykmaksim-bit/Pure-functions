import healthPlayer from '../../script.js';

test('should healthy', () => {
  const result = healthPlayer({name: 'Маг', health: 90});
  expect(result).toBe("healthy");
});
test('should wounded', () => {
  const result = healthPlayer({name: 'Маг', health: 90});
  expect(result).toBe("wounded");
});
test('should critical', () => {
  const result = healthPlayer({name: 'Маг', health: 90});
  expect(result).toBe("critical");
});
