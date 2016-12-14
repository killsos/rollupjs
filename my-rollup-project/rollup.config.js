import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';


export default {
  entry: './main.js',
  format: 'cjs',
  plugins: [ json(), babel() ],
  dest: 'bundle.js'
};