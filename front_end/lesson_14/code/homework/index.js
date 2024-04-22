// Необходимо создать функцию с названием arrayProcessor, которая будет принимать два параметра, первый параметр - массив, второй параметр - функция callback

// Требования:

// Функция arrayProcessor должна выполнять 3 действия:
// первое действие - преобразовать каждый элемент, в переданном массиве, в строку, результат должен сохраняться в новом массиве (то есть не мутировать входной массив)
// вызывать функцию, которая была передана в параметрах (функция callback будет принимать в качестве параметра преобразованный на первом шаге массив)
// возвращать то, что вернула функция callback после её вызова

// Чтобы показать пример использования функции arrayProcessor вам нужно:
// создать ещё две функции (требования к функциям см. в пункте 3)
// вызвать arrayProcessor с каждой из функций по очереди
// каждый из 2-х результатов вывести в консоль

// Требования к функциям callback
// первая функция должна преобразовывать каждый элемент массива в верхний регист и возвращать новый массив с преобразованными элементами
// вторая функция должна возвращать сумму длин всех строк в массиве

let arrayProcessor = (inputArray, operatorOnArray) => {
  let stringArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    stringArray.push(String(inputArray[i]));
  }
  // console.log(stringArray);

  return operatorOnArray(stringArray);
};

let getUpperCaseArray = (initialArray) => {
  let upperCaseStringsArray = [];
  for (let i = 0; i < initialArray.length; i++) {
    upperCaseStringsArray.push(initialArray[i].toUpperCase());
  }

  return upperCaseStringsArray;
};

let getSumArrayLength = (initialArray) => {
  let sum = 0;
  for (let element of initialArray) {
    // sum = sum + element.length;
    sum += element.length;
  }

  return sum;
};

let exampleArray = ["Red", "Black", "Green", true, undefined, null, []];

console.log(arrayProcessor(exampleArray, getUpperCaseArray));
console.log(arrayProcessor(exampleArray, getSumArrayLength));
