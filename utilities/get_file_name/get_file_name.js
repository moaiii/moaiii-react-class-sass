module.exports = get_file_name = (js_path) => {
  let arr = js_path.split('/');
  let len = arr.length;
  return arr.slice(len - 1, len)[0].replace('.js', '');
}