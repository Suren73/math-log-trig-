import Magician from '../magician';

test('testing class MathChhar', () => {
  const merlin = new Magician('Merlin');
  merlin.attack = 200;
  merlin.distance = 2;
  merlin.stoned = true;
  expect(merlin.attack).toBe(175);
});

test('testing class MathChhar', () => {
  const merlin = new Magician('Merlin');
  merlin.attack = 200;
  merlin.distance = 2;
  expect(merlin.attack).toBe(180);
});

test('testing class MathChhar', () => {
  const merlin = new Magician('Merlin');
  merlin.stoned = true;
  expect(merlin.stoned).toBe(true);
});

test('testing class Character', () => {
  expect(() => new Magician('M')).toThrow();
});
