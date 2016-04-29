import assert from 'assert'
import * as lib from './index'
require('colors')

async function test () {
  let answer;
  answer = await lib.getAnswer('enter anything : ')
  console.log(`You answered : ${answer}`)

  const accepts = [ 'y', 's', 'n' ]
  answer = await lib.getAnswer(`enter one of [${accepts.join(',')}] : `, { accepts })
  assert(accepts.indexOf(answer) >= 0)
  console.log(`You answered : ${answer}`)

  answer = await lib.askYesNo(`Are you sure`, true)
  console.log(`You answered : ${answer}`)

  answer = await lib.askYesNo(`Are you sure`, false)
  console.log(`You answered : ${answer}`)

  answer = await lib.pickList(`Pick your number`, [ '1', '3', '5' ])
  console.log(`Your number : ${answer}`)
}

test().catch(::console.error)
