import 'source-map-support/register'
const readline = require('readline')
const Promise = require('bluebird')

export async function getAnswer (msg = '', { accepts = [], allowEscape = true } = {}) {
  const i = readline.createInterface(process.stdin, process.stdout)
  const args = arguments
  return new Promise(resolve => {
    i.question(msg || '?'.white, answer => {
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
  const yn = defaultNo ? `[y/${'N'.green}]` : `[${'Y'.green}/n]`
  const ret = await getAnswer(`${question} ${yn}? `)
  return (ret.trim().toLowerCase() || (defaultNo ? 'n' : 'y')) === 'y'
}

export async function pickList (msg, list) {
  const accepts = []
  console.log(list.map((s, index) => {
    accepts.push((index + 1).toString())
    return `[${(index + 1).toString().green}] ${s}`
  }).join('\n'))
  const index = await getAnswer(msg, { accepts })
  return parseInt(index, 10) - 1
}

export default { getAnswer, askYesNo, pickList }
