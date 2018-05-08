module.exports = get_class_block = (string) => {
  return string.split("__")[0] || string;
}