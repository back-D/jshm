var ecmaName = prompt('Каково "официальное" название JavaScript?');

if (ecmaName == 'EcmaScript') {
    alert('Верно!');
}
    else {
    alert('Не знаете? "EcmaScript"!');
}


var value = +prompt('Введите любое число:');

if (value > 0) {
    alert('1');
} else if (value < 0) {
    alert('-1');
} else {
    alert('0');
}


var userName = prompt('Введите логин:');
var password;

if (userName == null) {
    alert('Вход отменен!');
} else if (userName != 'Админ') {
    alert('Я Вас не знаю!');
} else {
    password = prompt('Введите пароль:', 'your password here');
    if (password == null) {
        alert('Вход отменен!');
    } else if (password == 'Черный Властелин') {
        alert('Добро пожаловать!');
    } else {
        alert('Пароль неверен');
    }
}

// Переписать if в ?
/*if (a + b < 4) {
    result = 'Мало';
} else {
    result = 'Много';
}

result = (a + b < 4) ? 'Мало' : 'Много'
*/

// Перепишите 'if..else' в '?'
/* var message;

 if (login == 'Вася') {
 message = 'Привет';
 } else if (login == 'Директор') {
 message = 'Здравствуйте';
 } else if (login == '') {
 message = 'Нет логина';
 } else {
 message = '';
 }


 var message;

 message = (login == 'Вася') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';

  alert(message);
 */