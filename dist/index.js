'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.pickList = exports.askYesNo = exports.getAnswer = undefined;let getAnswer = exports.getAnswer = (() => {var ref = _asyncToGenerator(



  function* () {let msg = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];var _ref$accepts = _ref.accepts;let accepts = _ref$accepts === undefined ? [] : _ref$accepts;var _ref$allowEscape = _ref.allowEscape;let allowEscape = _ref$allowEscape === undefined ? true : _ref$allowEscape;
    const i = readline.createInterface(process.stdin, process.stdout);
    const args = arguments;
    return new Promise(function (resolve) {
      i.question(msg || '?'.white, function (answer) {
        i.close();
        if (accepts.length === 0 || accepts.indexOf(answer) >= 0) {
          resolve(answer || '');} else 
        {
          return resolve(getAnswer(...args));}});});});return function getAnswer(_x, _x2) {return ref.apply(this, arguments);};})();let askYesNo = exports.askYesNo = (() => {var ref = _asyncToGenerator(





  function* () {let question = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];let defaultNo = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
    const yn = defaultNo ? `[y/${ 'N'.green }]` : `[${ 'Y'.green }/n]`;
    const ret = yield getAnswer(`${ question } ${ yn }? `);
    return (ret.trim().toLowerCase() || (defaultNo ? 'n' : 'y')) === 'y';});return function askYesNo(_x5, _x6) {return ref.apply(this, arguments);};})();let pickList = exports.pickList = (() => {var ref = _asyncToGenerator(


  function* (msg, list) {
    const accepts = [];
    console.log(list.map(function (s, index) {
      accepts.push((index + 1).toString());
      return `[${ (index + 1).toString().green }] ${ s }`;}).
    join('\n'));
    const index = yield getAnswer(msg, { accepts: accepts });
    return parseInt(index, 10) - 1;});return function pickList(_x9, _x10) {return ref.apply(this, arguments);};})();require('source-map-support/register');function _asyncToGenerator(fn) {return function () {var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {function step(key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {return Promise.resolve(value).then(function (value) {return step("next", value);}, function (err) {return step("throw", err);});}}return step("next");});};}const readline = require('readline');const Promise = require('bluebird');exports.default = 


{ getAnswer: getAnswer, askYesNo: askYesNo, pickList: pickList };
//# sourceMappingURL=index.js.map
