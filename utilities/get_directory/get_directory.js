module.exports = get_directory = (js_path) => {
  let arr = js_path.split('/');
  let len = arr.length;
  return arr.slice(0, (len - 1)).join('/');
}