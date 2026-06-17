import healthPlayer from '../../script.js';

test('should healthy', () => {
  const player = {name: 'Маг', health: 90};
  const result = healthPlayer(player);
  expect(result).toBe("healthy");
});

test('should wounded', () => {
  const player = {name: 'Маг', health: 30};
  const result = healthPlayer(player);
  expect(result).toBe("wounded");
});

test('should critical', () => {
  const player = {name: 'Маг', health: 10};
  const result = healthPlayer(player);
  expect(result).toBe("critical");
});
