const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк'];

function countItems(array, condition) {
    let count = 0;

    for (const element of array) {
        if (condition(element)) {
            count++;
        }
    }

    return count;
}

const isEven = num => num % 2 === 0;
const isLarge = num => num > 10;
const isShort = word => word.length <= 3;

console.log('Парних чисел:', countItems(numbers, isEven));
console.log('Чисел більше 10:', countItems(numbers, isLarge));
console.log('Коротких слів:', countItems(words, isShort));

// task 2

const calculate = (a, b, operation) => {
    return operation(a, b);
};

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
    if (b === 0) {
        return 'Помилка: ділення на нуль неможливе!';
    }

    return a / b;
};

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, subtract));
console.log(calculate(10, 5, multiply));
console.log(calculate(10, 5, divide));
console.log(calculate(10, 0, divide));

// task 3

function repeatMessage(times, messageCreator) {
    for (let i = 0; i < times; i++) {
        messageCreator(i);
    }
}

const greeting = (i) => {
    console.log(`Привіт! Повідомлення №${i + 1}`);
};

const numbersMessage = (i) => {
    console.log(`Число: ${i + 1}`);
};

const motivation = (i) => {
    console.log(`Ти молодець! День ${i + 1}`);
};

console.log('Перший варіант:');
repeatMessage(3, greeting);
console.log('Другий варіант:');
repeatMessage(5, numbersMessage);
console.log('Третій варіант:');
repeatMessage(2, motivation);

// task 4

const movies = [
    { title: 'Аватар', year: 2009, rating: 7.9 },
    { title: 'Титанік', year: 1997, rating: 7.9 },
    { title: 'Інтерстеллар', year: 2014, rating: 8.7 },
    { title: 'Початок', year: 2010, rating: 8.8 },
    { title: 'Матриця', year: 1999, rating: 8.7 }
];

function processMovies(movies, action) {
    for (let i = 0; i < movies.length; i++) {
        action(movies[i], i);
    }
}

const showTitles = (movie, index) => {
    console.log(`${index + 1}. ${movie.title}`);
};

const showRatings = (movie, index) => {
    console.log(`${index + 1}. ${movie.title} — рейтинг: ${movie.rating}`);
};

const checkRating = (movie, index) => {
    if (movie.rating >= 8.5) {
        console.log(`${movie.title} — чудовий фільм!`);
    }
};

const showYears = (movie, index) => {
    console.log(`${movie.title} — ${movie.year} рік`);
};

// Тестування
console.log('Назви фільмів:');
processMovies(movies, showTitles);

console.log('Рейтинги фільмів:');
processMovies(movies, showRatings);

console.log('Фільми з високим рейтингом:');
processMovies(movies, checkRating);

console.log('Роки випуску:');
processMovies(movies, showYears);