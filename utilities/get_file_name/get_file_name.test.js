const get_file_name = require('./get_file_name');

describe('get_file_name', () => {
  describe('given a file with a .js extension', () => {
    it('gets the raw file name minus the .js', () => {
      expect(get_file_name('/index.js')).toEqual('index');
    });
  });

  describe('given a file with no extension', () => {
    it('gets the raw file name minus the .js', () => {
      expect(get_file_name('/javascript')).toEqual('javascript');
    });
  });
});