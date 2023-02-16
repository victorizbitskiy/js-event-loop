function log(value) {
  console.log(value)
}

log('1')

setTimeout(() => {
  log('setTimeout 1')
  Promise.resolve().then(() => {
    log('promise setTimeout')
  })
  queueMicrotask(() => {
    log('setTimeout queueMicrotask 1')
  })
  queueMicrotask(() => {
    log('setTimeout queueMicrotask 2')
  })
}, 0)

setTimeout(() => {
  log('setTimeout 2')
}, 0)

queueMicrotask(() => {
  log('queueMicrotask 1')
})

Promise.resolve().then(() => {
  log('promise 1')
})

queueMicrotask(() => {
  log('queueMicrotask 2')
})

Promise.resolve().then(() => {
  log('promise 2')
})

log('4')