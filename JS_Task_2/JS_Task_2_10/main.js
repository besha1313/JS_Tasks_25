// Task 2_10
// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

console.log('----------Task_2_10----------');

let a = +prompt('Введіть число А');
let b = +prompt('Введіть число B');

if (a > b){
    console.log(`Максимальне число ${a} (${a} > ${b})`)
}else if (a <b){
    console.log(`Максимальне число ${b} (${b} > ${a})`)
}else if (a === b){
    console.log(`Числа, що були введені "Дорівнюють один одному" (${a} = ${b})`)
}else {
    console.log(`Дозволяється вводити тільки числові значення. Перезавантажте сторінку і повторіть введення чисел.`)
}