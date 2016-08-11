'use strict';var _context;let waitAndReturn = (() => {var _ref = _asyncToGenerator(


  function* (ret, delay) {
    return new Promise(function (resolve) {return setTimeout(function () {return resolve(ret);}, delay);});
  });return function waitAndReturn(_x, _x2) {return _ref.apply(this, arguments);};})();let test = (() => {var _ref2 = _asyncToGenerator(

  function* () {
    let answer;
    answer = yield lib.getAnswer('enter anything : ');
    console.log(`You answered : ${ answer }`);

    const accepts = ['y', 's', 'n'];
    answer = yield lib.getAnswer(`enter one of [${ accepts.join(',') }] : `, { accepts: accepts });
    (0, _assert2.default)(accepts.indexOf(answer) >= 0);
    console.log(`You answered : ${ answer }`);

    answer = yield lib.askYesNo(`Are you sure`, true);
    console.log(`You answered : ${ answer }`);

    answer = yield lib.askYesNo(`Are you sure`, false);
    console.log(`You answered : ${ answer }`);

    answer = yield lib.pickList(`Pick your number`, ['1', '3', '5']);
    console.log(`Your chosen index : ${ answer }`);

    answer = yield lib.showProgress(`Operation in progress`, waitAndReturn(100, 1000));
    console.log(`Returned value : ${ answer }`);

    answer = yield lib.showProgress(`Operation in progress`, function () {return 1000;});
    console.log(`Returned value : ${ answer }`);
  });return function test() {return _ref2.apply(this, arguments);};})();var _assert = require('assert');var _assert2 = _interopRequireDefault(_assert);var _index = require('./index');var lib = _interopRequireWildcard(_index);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _asyncToGenerator(fn) {return function () {var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {function step(key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {return Promise.resolve(value).then(function (value) {return step("next", value);}, function (err) {return step("throw", err);});}}return step("next");});};}

test().catch((_context = console).error.bind(_context));
//# sourceMappingURL=sample.js.map
