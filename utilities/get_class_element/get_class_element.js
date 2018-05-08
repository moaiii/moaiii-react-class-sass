module.exports = get_class_element = (string) => {
  
  let step_1 = string.split("__")[1];

  if(typeof step_1 !== 'undefined') {

    let step_2 = step_1.split("--")[0];

    return typeof step_2 !== 'undefined' ? step_2 : step_1 
  
  } else {
    
    return ''
  }
}