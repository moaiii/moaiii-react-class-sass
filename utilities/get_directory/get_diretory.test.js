const get_directory = require('./get_directory');

describe('get_directory', () => {
  describe('given a files absolute path', () => {

    let test_path = 'Users/christophermelville/Development/test-project/src/index.js'

    it('the directory', () => {
      expect(get_directory(test_path)).toEqual('Users/christophermelville/Development/test-project/src');
    });
  });
});