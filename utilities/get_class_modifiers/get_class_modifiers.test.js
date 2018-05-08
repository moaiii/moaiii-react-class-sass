const get_class_modifiers = require('./get_class_modifiers');

describe('get_class_modifiers', () => {
  describe('given a file with a single modifier', () => {
    it('returns the string after the first --', () => {
      expect(get_class_modifiers('b__e --a')).toEqual(['a']);
    });
  });

  describe('given a file with a double modifier', () => {
    it('returns an array of two modifiers after the --', () => {
      expect(get_class_modifiers('b__e --a --b')).toEqual(['a', 'b']);
    });
  });
});