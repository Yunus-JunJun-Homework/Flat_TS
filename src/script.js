var array = [7, [[5, 4], 6, [9, 3, [5, 8]]]];
var realizeFuncFlat = function myFlat(arr) {
    if (arguments.length > 1) {
        throw new Error('Function accepts only 1 argument, too much arguments provided');
    }
    else {
        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                newArr = newArr.concat(myFlat(arr[i]));
            }
            else {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }
};
console.log(realizeFuncFlat(array));
// console.log(realizeFuncFlat(array, array2));
var array2 = [7, [[5, 4], 6, [9, 3, ['present', 'future']]], [[[['finished']]]]];
var realizeSecondFuncFlat = function myFlatTwo(arr, b) {
    if (b) {
        throw new Error('Function accepts only 1 argument, too much arguments provided');
    }
    return arr.reduce(function (accum, currentArr) {
        return accum.concat(Array.isArray(currentArr) ? realizeSecondFuncFlat(currentArr) : currentArr);
    }, []);
};
console.log(realizeSecondFuncFlat(array2));
// console.log(realizeSecondFuncFlat(array2, array));
// Ваша функция должна повторять базовый функционал метода flat, но с некоторыми доработками.
//
//   Функция принимает только 1 аргумент — массив,
//
//   Функция возвращает только одномерный массив
//
// Если пользователь передает больше 1-го аргумента, выкидывать ошибку в консоль
//
// throw new Error('Function accepts only 1 argument, too much arguments provided');
// Если в функцию передали многомерный массив то она должна вернуть новый одномерный массив
//
// Если в функцию передали одномерный массив, то она должна вернуть новый массив являющийся полной
// копией переданного
//
// P.S использование метода flat запрещено
//
// P.P.S если найдете пробел или не точность в описании задаче, отпишите мне в телегу и поправим
