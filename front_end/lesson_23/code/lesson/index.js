// состояния промиса (схема)
// promise {
//   state: pending | fulfilled|rejected
//   result: undefined | value | error
//   }

//   resolve(value)
//   reject(error)

//варианты обработки результата промиса методами then, catch и finally
// promise.then((result)=>{}, (error)=>{}).finally(()=>{spinner.style.display = 'none'})

// promise.then((result)=>{}).then(null, (error)=>{}).finally(()=>{})

// promise.then((result)=>{}).catch((error)=>{}).finally(()=>{})

//Метод Promise.all
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Промис 1 завершился удачно");
    reject("Промис 1 завершился неудачно");
  }, 7000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Промис 2 завершился удачно");
    reject("Промис 2 завершился неудачно");
  }, 6000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Промис 3 завершился удачно");
  }, 4000);
});

//Promise.all - возвращает свой промис, который ждет завершения выполнения всех промисов в массиве
Promise.all([promise1, promise2, promise3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//В консоли будет виден успешный результат в ввиде массива значений каждого промиса
// [
//   'Промис 1 завершился удачно',
//   'Промис 2 завершился удачно',
//   'Промис 2 завершился удачно'
// ]
//В консоли будет виден неудачный результат только одного промиса (например, текст его ошибки), который завершился неудачно быстрее всех
//"Промис 1 завершился неудачно"

//Метод Promise.race
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Промис 4 завершился удачно");
    reject("Промис 4 завершился неудачно");
  }, 5000);
});

const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Промис 5 завершился удачно");
    reject("Промис 5 завершился неудачно");
  }, 2000);
});

const promise6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Промис 6 завершился удачно");
  }, 4000);
});

//Promice.race - возвращает свой промис, который ждет выполнения всех промисов в массиве
//и сохраняет результат (удачный или неудачный) самого быстрого промиса
Promise.race([promise4, promise5, promise6])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });


