//Дан объект passport. Создай его копию и поменяй
//имя с "Petr" на "Ivan", и убедись в консоли, что
//у объекта passport имя осталось "Petr", а у
//твоего нового объекта "Ivan".

let passport = {
    name: "Petr",
    surname: "Petrov",
};
console.log(passport.name)

let data = passport;
data.name="Ivan";
console.log(data.name);

//Для того, чтобы проверить правильность данного
//задания должно быть выведено 2 console.log