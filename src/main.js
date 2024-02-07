console.log('#1. JavaScript homework example file')

/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */
var myNum = 10 // ім'я змінної: myNum, значення: 10
var myStr = 'some string' // ім'я змінної: myStr, значення: 'some string'
var myBool = true // ім'я змінної: myBool, значення: true
var myArr = [1, 2, 3, 4, 5] // ім'я змінної: myArr, значення: 1, 2, 3, 4, 5
var myObj = {
  first: 'First Name',
  last: 'Last Name'
} // ім'я змінної myObj, значення: first: 'First Name', last: 'Last Name'

console.log('myNum: ', myNum)
console.log('myStr:', myStr)
console.log('myBool:', myBool)
console.log('myArr:', myArr)
console.log('myObj:', myObj)

/*
 * #2
 *
 * Відформатуйте ціле число, яке зберігається у змінній myNum, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */
var decimal2 = myNum.toFixed(2)

/*
 * #3
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент і декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */
var i = 0

console.log('Префиксный инкремент:', ++i)
console.log('Постфиксный инкремент:', i++)
console.log('Значение i:', i)
console.log('Префиксный декремент:', --i)
console.log('Постфиксный декремент:', i--)
console.log('Значение i:', i)

/*
 * #4
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */
var myTest = 20

myTest += myNum
console.log('+=', myTest)

myTest -= 10
console.log('-=', myTest)

myTest *= 2
console.log('*=', myTest)

myTest /= myNum
console.log('/=', myTest)

myTest %= 3
console.log('%=', myTest)

/*
 * #5
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі
 */
var myPi = Math.PI // константа Pi → myPi
console.log('myPi:', myPi)

var myRound = Math.round(89.279) // округлене значення числа 89.279 → myRound
console.log('myRound:', myRound)

var myRandom = Math.random() * 10 // випадкове число між 0..10 → myRandom
console.log('myRandom:', myRandom)

var myPow = Math.pow(3, 5) // 3 у 5 степені → myPow
console.log('myPow:', myPow)

/*
 * #6
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str довільний непорожній рядок тексту, ключу length встановіть довжину цього рядка.
 */
var strObj = { str: 'Мама мыла раму, рама мыла маму' }

strObj.length = strObj.str.length
console.log('strObj = ', strObj)

/*
 * #7
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.6), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */
var isRamaPos = strObj.str.indexOf('рама')
var isRama = strObj.str.includes('рама')

console.log('isRamaPos:', isRamaPos)
console.log('isRama:', isRama)

/*
 * #8
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.6), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *       Результат: 'Мама моет раму, Рама держит маму'
 */
var strReplace = strObj.str.replace('мыла', 'моет')

strReplace = strReplace.replace('рама', 'Рама')
strReplace = strReplace.replace('мыла', 'держит')
console.log('strReplace:', strReplace)

/*
 * #9
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */
var someStr = 'some STRING'
var upperStr = someStr.toUpperCase()
var lowerStr = someStr.toLowerCase()

console.log(upperStr)
console.log(lowerStr)
