'use strict';

console.log('Welcome to the React class SASS logger');

const exec = require('child_process').exec;

let paths = [];

var init_objects = exec('grep --exclude-dir={node_modules,public} -l -r className \*', (error, stdout, stderr) => {

  let raw = stdout;

  paths = raw.split('\n')
    .map(path => {
      return {
        react_path: path,
        directory: get_directory(path),
        sass_path: get_file_name(path) + '.scss',
        raw_string: get_raw_class_instances(path),
        classes: [],
      };
    });

    // [
    //   {
    //     block: '',
    //     element: '',
    //     modifiers: [],
    //   }
    // ]

  // console.log(paths);
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
  let x = null;
  
  var raw = exec(cmd, (error, stdout, stderr) => {
    x = stdout;
  });

  console.log(path, '\n', x, '\n\n\n');

  return raw;
}