import Daemon from '../daemon';

test('testing class MathChhar', () => {
  const merlin = new Daemon('Merlin');
  merlin.attack = 200;
  merlin.distance = 2;
  merlin.stoned = true;
  expect(merlin.attack).toBe(175);
});

test('testing class MathChhar', () => {
  const merlin = new Daemon('Merlin');
  merlin.attack = 200;
  merlin.distance = 2;
  expect(merlin.attack).toBe(180);
});

test('testing class MathChhar', () => {
  const merlin = new Daemon('Merlin');
  merlin.stoned = true;
  expect(merlin.stoned).toBe(true);
});

test('testing class Character', () => {
  expect(() => new Daemon('M')).toThrow();
});
