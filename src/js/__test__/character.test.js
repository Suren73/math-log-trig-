import Character from '../character';

test('testing class Character', () => {
  expect(() => new Character('Merlin', 'Daemon1')).toThrow();
});
