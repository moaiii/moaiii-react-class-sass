'use strict';

console.log('Welcome to the React class SASS logger \n');

const exec = require('child_process').exec;

let paths = [];

var init_objects = exec('grep --exclude-dir={node_modules,public,build} --exclude={*.md,*.scss,*.txt} -l -r className \*', (error, stdout, stderr) => {

  let raw = stdout;

  paths = raw.split('\n')
    .map(path => {
      get_raw_class_instances(path)
        .then(rawClassList => {
          let obj = {
            jsx_path: path,
            directory: get_directory(path),
            sass_filename: get_file_name(path) + '.scss',
            classes: get_classes(rawClassList)
          };

          console.log(obj);

          // create sass files !!!

          return obj
        })
        .catch(err => console.error(err))
    });

  return;
});

const get_directory = (js_path) => {
  let arr = js_path.split('/');
  let len = arr.length;
  return arr.slice(0, (len - 1)).join('/');
}

const get_file_name = (js_path) => {
  let arr = js_path.split('/');
  let len = arr.length;
  return arr.slice(len - 1, len)[0].replace('.js', '');
}

const get_raw_class_instances = (path) => {
  let cmd = `grep className ${path}`;
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      resolve(stdout.split('\n'));
    });
  })
}

const get_classes = (rawClassList) => {
  return rawClassList
    .map(item => get_clean_classname(item))
    .filter(item => item !== undefined)
    .map(class_string => {
      return {
        block: get_class_block(class_string),
        element: get_class_element(class_string),
        modifiers: JSON.stringify(get_class_modifiers(class_string)),
        dynamic_modifiers: get_dynamic_modifiers(class_string)
      }
    })
}

const get_clean_classname = (dirty_string) => {
  return dirty_string.split("\"").slice(1, 2)[0];
}

const get_class_block = (string) => {
  return string.split("__")[0] || string;
}

const get_class_element = (string) => {
  let step_1 = string.split("__")[1];
  if(typeof step_1 !== 'undefined') {
    let step_2 = step_1.split("--")[0];
    return typeof step_2 !== 'undefined' ? step_2 : step_1 
  } else {
    return ''
  }
}

const get_class_modifiers = (string) => {
  if(typeof string !== 'undefined') {
    let x = string.split("--");
    let y = x.slice(1, x.length);
    return (y.length > 0) ? y : []
  }
}

const get_dynamic_modifiers = (string) => {

}