function kolobok (person) {
    switch(person) {
        case 'дедушка':
            return 'Я от дедушки ушёл';
        case 'лиса':
            return 'Меня съели';
        case 'заяц':
            return 'Спел песенку';
    }
}
console.log(kolobok('дедушка'));
console.log(kolobok('лиса'));
console.log(kolobok('заяц'));


function newYear (name) {
    if (name === 'Дед Мороз' || name === 'Снегурочка') {
        return `${name}! ${name}! ${name}!`;
    }
    else {
        return 'Нового года не будет(';
    }
}

console.log(newYear('Снегурочка'));
console.log(newYear('Дед Мороз'));
console.log(newYear('Гринч'));