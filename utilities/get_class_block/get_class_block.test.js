const get_class_block = require('./get_class_block');

describe('get_class_block', () => {
  describe('given a bem element class', () => {

    let test_bem_class = 'block__element --mod-a --mod-b';

    it('returns the block portion', () => {
      expect(get_class_block(test_bem_class)).toEqual('block');
    });
  });
});