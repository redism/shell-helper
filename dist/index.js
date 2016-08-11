'use strict';Object.defineProperty(exports, "__esModule", { value: true });let getAnswer = exports.getAnswer = (() => {var _ref = _asyncToGenerator(




  function* () {let msg = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];var _ref2 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];var _ref2$accepts = _ref2.accepts;let accepts = _ref2$accepts === undefined ? [] : _ref2$accepts;var _ref2$allowEscape = _ref2.allowEscape;let allowEscape = _ref2$allowEscape === undefined ? true : _ref2$allowEscape;
    const i = readline.createInterface(process.stdin, process.stdout);
    const args = arguments;
    return new Promise(function (resolve) {
      i.question(msg || colors.white('?'), function (answer) {
        i.close();
        if (accepts.length === 0 || accepts.indexOf(answer) >= 0) {
          resolve(answer || '');
        } else {
          return resolve(getAnswer(...args));
        }
      });
    });
  });return function getAnswer(_x, _x2) {return _ref.apply(this, arguments);};})();let askYesNo = exports.askYesNo = (() => {var _ref3 = _asyncToGenerator(

  function* () {let question = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];let defaultNo = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
    const yn = defaultNo ? `[y/${ colors.green('N') }]` : `[${ colors.green('Y') }/n]`;
    const ret = yield getAnswer(`${ question } ${ yn }? `);
    return (ret.trim().toLowerCase() || (defaultNo ? 'n' : 'y')) === 'y';
  });return function askYesNo(_x5, _x6) {return _ref3.apply(this, arguments);};})();let pickList = exports.pickList = (() => {var _ref4 = _asyncToGenerator(

  function* (msg, list) {
    const accepts = [];
    console.log(list.map(function (s, index) {
      accepts.push((index + 1).toString());
      return `[${ colors.green((index + 1).toString()) }] ${ s }`;
    }).join('\n'));
    const index = yield getAnswer(msg, { accepts: accepts });
    return parseInt(index, 10) - 1;
  });return function pickList(_x9, _x10) {return _ref4.apply(this, arguments);};})();let showProgress = exports.showProgress = (() => {var _ref5 = _asyncToGenerator(

  function* (msg, fnOrPromise)



  {let options = arguments.length <= 2 || arguments[2] === undefined ? { running: colors.yellow(`running `), fail: colors.red(`fail `), ok: colors.green(`ok `) } : arguments[2];
    process.stdout.write(colors.white(`${ msg } : `) + options.running);
    const end = function end(res) {
      readline.clearLine(process.stdout);
      process.stdout.write(`\r${ colors.white(msg) } : ` + res + '\n');
    };

    let r;
    try {
      if (isFunction(fnOrPromise)) {
        r = fnOrPromise();
      } else {
        r = yield fnOrPromise;
      }
      end(options.ok);
    } catch (ex) {
      end(options.fail);
      throw ex;
    }
    return r;
  });return function showProgress(_x11, _x12, _x13) {return _ref5.apply(this, arguments);};})();function _asyncToGenerator(fn) {return function () {var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {function step(key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {return Promise.resolve(value).then(function (value) {return step("next", value);}, function (err) {return step("throw", err);});}}return step("next");});};} //import 'source-map-support/register'
const readline = require('readline');const colors = require('colors/safe');const isFunction = obj => !!(obj && obj.constructor && obj.call && obj.apply);exports.default =
{ getAnswer: getAnswer, askYesNo: askYesNo, pickList: pickList, showProgress: showProgress };
//# sourceMappingURL=index.js.map
