// // 1) setTimeout не выполнится никогда
// function recursivePromise(promise) {
//   return promise.then(() => {
//     console.log('Promise 1')
//     recursivePromise(Promise.resolve())
//   })
// }

// recursivePromise(Promise.resolve())

// setTimeout(() => console.log('Timeout 1'))

// 2) Promise никогда не выполнится

for (let i = 0; i < Infinity; i++) {
  console.log(i)
  Promise.resolve().then(() => console.log('Мы никогда не увидим это сообщение :('))
}


