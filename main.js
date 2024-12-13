let users = {};
for(let i = 1; i <= 3; i++){
    let name = prompt(`Введите имя пользователя ${i}`);
    let age = prompt(`Введите возраст пользователя ${i}`);
    users[i] = {
        name: name,
        age: age
    };
}
for(let i = 1; i <= 3; i++){
  if (users[i]) {
    console.log(`Пользователь ${i}`);
    console.log(`Имя: ${users[i].name}`);
    console.log(`Возраст: ${users[i].age}`);
    }
}