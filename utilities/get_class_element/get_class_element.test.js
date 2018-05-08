const get_class_element = require('./get_class_element');

describe('get_class_element', () => {
  describe('given a bem class', () => {
    it('gets the element portion only', () => {
      expect(get_class_element('block__element --modifier')).toEqual('element');
    });
  });
});