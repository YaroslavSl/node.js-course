// определяем нашу функцию с аргументом callback
function myFunction(arg1, callback) {
    console.log(`myFunction(${arg1})`);
    // теперь всё готово и  мы вызываем callback, куда передаём параметр
    callback(arg1);
}

// вызываем функцию
myFunction(5, (num) => {
    // эта стрелочная функция выполнится после вызова callback-функции
    console.log(`callback(${num})`);
});