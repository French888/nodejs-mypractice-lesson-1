// const Calc = require("calc-js").Calc;

// const { getCurrentDate } = require("./dateUtils");
// global.testData = "AAAAA";
// console.log(`get current date function result ${getCurrentDate()}`);
// console.log("global.testData");
// console.log("Hello world");
// console.log(process.env);
// console.log(process.argv);
// console.log(process.exit);
// console.log(__dirname);
// console.log(__filename);
// console.log(process.argv);
// const [, , a, b] = process.argv;
// console.log(new Calc(parseInt(a)).sum(parseInt(b)).finish());

// передаем относителльный путь получаем абсолютный
// const path = require("path");
// console.log(path.resolve("dateUtils.js"));

// используем колбек в кот первый аргумент ошибка второй данные
// const fs = require("fs");
// fs.readFile("./data.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);
// });

// используем промис
// const fs = require("fs").promises;
// fs.readFile("./data.txt", "utf-8")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.error);

//   используем async await синтаксис
// const fs = require("fs").promises;
// (async () => {
//   try {
//     const data = await fs.readFile("./data.txt", "utf-8");
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// })();

// используем функцию запиши файл
// const fs = require("fs").promises;
// (async () => {
//   try {
//     const data = await fs.readFile("./data.txt", "utf-8");
//     console.log(data);

//     const newContent = `${data}school`;
//     await fs.writeFile("./data1.txt", newContent, "utf-8");
//   } catch (err) {
//     console.error(err);
//   }
// })();

// переименовать функцию запиши файл
const fs = require("fs").promises;
(async () => {
  try {
    const data = await fs.readFile("./package.json", "utf-8");
    console.log(JSON.parse(data).dependencies);

    // const newContent = `${data}school`;
    // await fs.writeFile("./data1.txt", newContent, "utf-8");
    // await fs.rename("./data.txt", "data1.txt");
    // перемещение в tmp файл;
    // await fs.rename("./data.txt", "tmp/data1.txt")
    // читаем содержимое данной папки
    // console.log(await fs.readdir("./tmp"));
    // удаляем файл
    // await fs.unlink("./tmp/data1.txt");
  } catch (err) {
    console.error(err);
  }
})();
