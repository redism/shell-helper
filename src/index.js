//import 'source-map-support/register'
const readline = require('readline')
const colors = require('colors/safe')
const isFunction = obj => !!(obj && obj.constructor && obj.call && obj.apply)

export async function getAnswer (msg = '', { accepts = [], allowEscape = true } = {}) {
  const i = readline.createInterface(process.stdin, process.stdout)
  const args = arguments
  return new Promise(resolve => {
    i.question(msg || colors.white('?'), answer => {
      i.close()
      if (accepts.length === 0 || accepts.indexOf(answer) >= 0) {
        resolve(answer || '')
      } else {
        return resolve(getAnswer(...args))
      }
    })
  })
}

export async function askYesNo (question = '', defaultNo = true) {
  const yn = defaultNo ? `[y/${colors.green('N')}]` : `[${colors.green('Y')}/n]`
  const ret = await getAnswer(`${question} ${yn}? `)
  return (ret.trim().toLowerCase() || (defaultNo ? 'n' : 'y')) === 'y'
}

export async function pickList (msg, list) {
  const accepts = []
  console.log(list.map((s, index) => {
    accepts.push((index + 1).toString())
    return `[${colors.green((index + 1).toString())}] ${s}`
  }).join('\n'))
  const index = await getAnswer(msg, { accepts })
  return parseInt(index, 10) - 1
}

export async function showProgress(msg, fnOrPromise, options = {
  running: colors.yellow(`running `),
  fail: colors.red(`fail `),
  ok: colors.green(`ok `),
}) {
  process.stdout.write(colors.white(`${msg} : `) + options.running)
  const end = res => {
    readline.clearLine(process.stdout)
    process.stdout.write(`\r${colors.white(msg)} : ` + res + '\n')
  }

  let r;
  try {
    if (isFunction(fnOrPromise)) {
      r = fnOrPromise();
    } else {
      r = await fnOrPromise;
    }
    end(options.ok)
  } catch (ex) {
    end(options.fail)
    throw ex;
  }
  return r
}

export default {getAnswer, askYesNo, pickList, showProgress}
