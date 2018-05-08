module.exports = get_class_modifiers = (string) => {
  if(typeof string !== 'undefined') {
    let x = string.split("--");
    let y = x.slice(1, x.length);
    return (y.length > 0) ? y : []
  }
}