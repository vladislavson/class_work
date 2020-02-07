//операторы сравнения
console.log(2 == 3);
console.log('Кот' > 'Код');
console.log('2' > 1);
console.log(true == 1);
console.log(true === 1);

// if (1 == 2) {
//     alert(true)
// }
// else {
//     alert(false)
// }

// if (0) {
//     alert('hi');
// }

// var year = prompt('В каком году изобрели JS')
// if (year == 1995){
//     alert(true);
// }
// else{
//     alert(false);
// }

// if (year > 1995) {
//     alert('mnogo')
// }
// else if(year < 1995) {
//     alert('malo')
// }
// else{
//     alert('pravilno')
// }\

// var num = prompt('Введите число')
// if(num > 0){
//     alert('Вы ввели положительное число');
// }
// else if(num < 0){
//     alert('Вы ввели отрицательное число');
// }
// else if(num == 0) {
//     alert('Вы ввели 0');
// }

// alert(true || true) //true
// alert(true || false) //true
// alert(false || true) //true
// alert(false || false) //true

// var year = prompt('В каком году изобрели JS');
// if (year == 1995 || year == 95){
//     alert('TRUE')
// }
// else{
//     alert('FALSE')
// }

// alert(true && true) //true
// alert(true && false) //false
// alert(false && true) //false
// alert(false && false) //false

// var str = prompt('Введите число 12');
// var str2 = prompt('Введите число 30');
// if (str == 12 && str2 == 30) {
//     alert('TRUE')
// }

// var condition = 1 == 1;
// alert(!condition);

// if(null || 2 || undefined){
//     alert('lol')
// }
// else{
//     alert('kek');
// }

// var age = prompt('Введите свой возраст')
// if (age >= 18 && age <= 50){
//     alert('OK')
// }
// else{
//     alert('Ne OK');
// }

// var login = prompt('Введите логин')
// if (login == 'admin' || login == 'ADMIN' || login == 'Admin'){
//     var pass = prompt('Введите пароль')
//     if (pass == 'boss'){
//         alert('Успешно');
//     }
//     else if(pass == null){
//         alert('отменено');
//     }
//     else{
//         alert('Пароль не верный');
//     }
    
// }
// else if(login == null){
//     alert('отменено');
// }
// else{
//     alert('Логина не сущетсвует');
// }

var a = 2 + 2;
switch (a) {
    case 3:
        alert('3');
        break;
    case 4:
        alert('4');
        break;
    case 3:
        alert('5');
        break;

    default:
        alert('net sovpadeniy');
        break;
}