/*
let string = 'some test string';

//1, 2
let firstLetter = string.slice(0,1);
let lastLetter = string.slice(-1);

console.log(string);
console.log(firstLetter.toUpperCase());
console.log(lastLetter.toUpperCase());

//3
console.log(string.indexOf('string'));

//4
let firstSpace = string.indexOf(' ');
let secondSpace = string.indexOf(' ', firstSpace + 1);
console.log(secondSpace);

//5
let str = string.substr(5, 4);
console.log(str);

//6
str = string.slice(5, 10);
console.log(str);

//7
str = string.slice(0, string.length - 6);
console.log(str);
str = string.slice(0, -6);
console.log(str);

//8
const a = 20;
const b = 16;
string = `${a}${b}`;
string = String(a) + String(b);
console.log(string);
*/

/*
//1
let obj = {
   product: 'iphone',
};

//2
obj.price = 1000;
obj.currency = 'dollar';

//3
obj.details = {
   model: '',
   color: '',
};

console.log(obj);
*/

/*
//1
//let a = 0 || 'string';
//let a = 1 && 'string';
//let a = null || 25;
//let a = null && 25;
//let a = null || 0 || 35;
let a = null && 0 && 35;
//console.log(a);

//2
let b;
b = 12 + 14 + '12'; //'2612'
b =  3 + 2 - '1'; //4
b = '3' + 2 - 1; //'32' - 1 = 31
b = true + 2; //true = 1; 1+2=3
b = +'10' + 1; //10+1=11
b = undefined + 2; //NaN
b = null + 5; //null = 0; 0+5=5
b = true + undefined; //NaN

console.log(b);
*/

//1
let value = 'hidden';
if (value === 'hidden') {
   value = 'visible';
} else {
   value = 'hidden';
}

//value = (value === 'hidden') ? 'visible' : 'hidden';

console.log(value);

//2
let b = 7; //prompt('Enter a number:', 7);

if (b === 0) {
   b = 1;
} else if (b < 0) {
   b = 'less than zero';
} else {
   b *= 10;
}

//b = (b === 0) ? 1 : (b < 0) ? 'less than zero' : b * 10;

console.log(b);

//3
let car = {
   name: 'Lexus',
   age: 10,
   create: 2008,
   needRepair: false,
};

if (car.age > 5) {
   console.log('Need Repair');
   car.needRepair = true;
} else {
   car.needRepair = false;
}

console.log(car.needRepair);

//4
let item = {
   name: 'Intel core i7',
   price: '100$',
   discount: '15%',
};

const price = parseFloat(item.price);
const discount = parseFloat(item.discount);

if (!isNaN(discount) && !isNaN(price)) {
   priceWithDiscount = price - price * (discount / 100);
   console.log('priceWithDiscount: ', priceWithDiscount);
} else {
   console.log('item price: ', item.price);
}

//5
let product = {
   name: 'Яблоко',
   price: '10$',
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена

if (parseInt(product.price) >= min && parseInt(product.price) <= max) {
   console.log('product name: ', product.name);
} else {
   console.log('products not found');
}

//6
a = 'inline';

// if (a === 'block') {
// 	console.log('block')
// } else if (a === 'none') {
// 	console.log('none')
// } else if (a === 'inline') {
// console.log('inline')
// } else {
// 	console.log('other')
// }

// switch (a) {
//    case 'block':
//       console.log('block');
//       break;
//    case 'none':
//       console.log('none');
//       break;
//    case 'inline':
//       console.log('inline');
//       break;
//    default:
//       console.log('other');
// }

//1

// let str = 'i am in the easycode';
// let nstr = '';

// for (let i=0; i<str.length; i++) {
//    if (i===0 || str[i-1]===' ') {
//       nstr += str[i].toUpperCase();
//    } else {
//       nstr += str[i];
//    }

// }

// console.log(nstr);

//2

// let str = 'tseb eht ma i';
// let nstr = '';

// for (i=str.length-1; i>-1; i--) {
//    nstr += str[i];
// }

// console.log(nstr);

//3

// let n = 5;
// let fact = 1;

// for (let i=1; i<=n; i++) {
//    fact *=i;
// }

// console.log(`факториал ${n}: `, fact);

//4

// let str = 'JavaScript is a pretty good language';
// let nstr = '';

// for (let i = 0; i<str.length; i++) {
//    if (i === 0 || str[i-1]===' ') {
//       nstr += str[i].toUpperCase();
//    } else {
//       if (str[i] === ' ') continue;
//       nstr += str[i];
//    }
// }

// console.log(nstr);

//5

// let mas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// for (let value of mas) {
//    if (value % 2 ) console.log(value);
// }

//6

// let list = {
//    name: 'denis',
//    work: 'easycode',
//    age: 29,
// };

// for (let key in list) {
//    if (typeof list[key] === 'string') {
//       list[key] = list[key].toUpperCase();
//    }
// }

// console.log(list);

//1
// function multiply() {
//    let mult = 1;
//    if (arguments.length === 0) return 0;
//    for (let i = 0; i < arguments.length; i++) {
//       mult *= arguments[i];
//    }
//    return mult;
// }
// console.log(multiply(5, 8));

//2

// function reverseString(text){
//    let str = String(text);
//    let result = '';
//    for (let i=str.length-1; i>-1; i--)
//    {
//       result +=str[i];
//    }
//    return result;
// }
// console.log(reverseString('hey'));

//3

// function getCodeStringFromText(text) {
//    let str = String(text);
//    let unicode = '';
//    for (let i=0; i<str.length; i++) {
//       unicode += str[i].charCodeAt() + ' ';
//    }
//    return unicode.trim();
// }
// console.log(getCodeStringFromText('hey'));

//4

// function guessTheNumber(numb) {
//    let num = Number(numb);
//    let random = Math.ceil(Math.random() * 10);
//    if (isNaN(num) || typeof num !== 'number') {
//       return ('Please, enter the number.')
//    }
//    if (num > 10 || num < 0) {
//       return ('Please, enter another number.');
//    }
//    if (num === random) return ('You\'re win!');
//    return (`You're loose! Your number is ${num} and the random number is ${random}.`);
// }
// console.log(guessTheNumber(6));

//5

function getArray(n) {
   let arr = [];
   for (let i = n; i > 0; i--) {
      arr.unshift(i);
   }
   return arr;
}
// console.log(getArray(7));

//6

function doubleArr(arr) {
   return arr.concat(arr);
}
// console.log(doubleArr([1, 2,3,4]));

//7
function changeCollection() {
   let arr = [];
   for (let i = 0; i < arguments.length; i++) {
      if (Array.isArray(arguments[i])) {
         let elements = arguments[i].slice();
         elements.shift();
         arr.push(elements);
      }
   }
   return arr;
}
// console.log(changeCollection([1, 2, 3]));

//8
const users = [
   {
      _id: '5e36b779dc76fe3db02adc32',
      balance: '$1,955.65',
      picture: 'http://placehold.it/32x32',
      age: 33,
      name: 'Berg Zimmerman',
      gender: 'male',
   },
   {
      _id: '5e36b779d117774176f90e0b',
      balance: '$3,776.14',
      picture: 'http://placehold.it/32x32',
      age: 37,
      name: 'Deann Winters',
      gender: 'female',
   },
   {
      _id: '5e36b779daf6e455ec54cf45',
      balance: '$3,424.84',
      picture: 'http://placehold.it/32x32',
      age: 36,
      name: 'Kari Waters',
      gender: 'female',
   },
];

function filterUsers(arr, key, value) {
   if (!Array.isArray(arr))
      return new Error('The first argument should be an array');

   if (typeof key !== 'string' || key === '')
      return new Error('The key should be a valid string');

   if (value === undefined || value === null)
      return new Error('The value should be a valid value.');

   let res = [];

   for (let i = 0; i < arr.length; i++) {
      if (arr[i][key] === value) {
         res.push(arr[i]);
      }
   }

   return res;
}

//console.log(filterUsers(users, "name", 'Kari Waters'))

//1
function firstFunc(arr, fn) {
   let res = [];
   for (let i = 0; i < arr.length; i++) {
      res += fn(arr[i]);
   }
   return res;
}

function handler1(el) {
   return el[0].toUpperCase() + el.slice(1);
}

console.log(firstFunc(['my', 'name', 'is'], handler1));

function handler2(el) {
   return Number(el) * 10 + ', ';
}

console.log(firstFunc([10, 20, 30], handler2));

function handler3(el) {
   return `${el.name} is ${el.age}, `;
}

console.log(
   firstFunc(
      [
         { age: 45, name: 'Jhon' },
         { age: 20, name: 'Aaron' },
      ],
      handler3
   )
);

function handler4(el) {
   return el.split('').reverse().join('') + ', ';
}

console.log(firstFunc(['umbrella', '123', 'is'], handler4));

//2
function every(arr, fn) {
   let n = 5;
   if (!Array.isArray(arr))
      return new Error('The first argument expected as array');
   if (!fn || typeof fn !== 'function')
      return new Error('The second argument expected as function');

   for (let i = 0; i < arr.length; i++) {
      if (!fn(arr[i], i, arr) || arr[i] < 5) {
         return false;
      }
   }
   return true;
}

function type(el) {
   return typeof el === 'number';
}
const res = every([6, 7], type);
console.log(res);
//  console.log(every([7,9], function (el) {
//    return typeof el === 'number';
//  }))

//1

// const rectangle = {
//    width: 10,
//    height: 7,
// };
// getSquare = function() {
//    return this.width * this.height;
// }
const rectangle = {
   width: 10,
   height: 7,
   getSquare() {
      return this.width * this.height;
   },
};
// console.log(getSquare.call(rectangle));
console.log(rectangle.getSquare());

//2
getPrice = function () {
   return this.price;
};

getPriceWithDiscount = function () {
   const discount = parseFloat(this.discount);
   return this.price - this.price * (discount / 100);
};

const item1 = {
   price: 15,
   discount: '15%',
   getPrice,
   getPriceWithDiscount,
};

console.log(item1.getPrice());
console.log(item1.getPriceWithDiscount());

//3
const height = {
   height: 10,
   inc() {
      return ++this.height;
   },
};
console.log(height.height);
console.log(height.inc());

//4
const numerator = {
   value: 5,
   double() {
      this.value *= 2;
      return this;
   },
   inc() {
      ++this.value;
      return this;
   },
   dec() {
      --this.value;
      return this;
   },
};
console.log(numerator.value);
numerator.double().inc().dec();
console.log(numerator.value);

//5
const prod = {
   price: 200,
   counts: 15,
   getTotalPrice() {
      return this.price * this.counts;
   },
};
console.log(prod.getTotalPrice());

//6
const details = {
   price: 20,
   counts: 170,
};
console.log(prod.getTotalPrice.call(details));

//7
let sizes = {
   width: 5,
   height: 10,
};
getSquare = function () {
   return this.width * this.height;
};
console.log(getSquare.call(sizes));

//8
let element = {
   height: 25,
   getHeight: function () {
      return this.height;
   },
};
let getElementHeight = element.getHeight.bind(element);
console.log(getElementHeight());

//1
// function sum() {
//    const params = Array.prototype.slice.call(arguments);

//    if (!params.length) return 0;

//    return params.reduce(function (prev, next) { return prev + next; });
//  }

//  sum(1, 2, 3, 4); // 10
//  sum(); // 0

const sum = (...params) => {
   //const params = Array.prototype.slice.call(arguments);
   if (!params.length) return 0;

   return params.reduce((prev, next) => {
      return prev + next;
   });
};
console.log(sum(1, 2, 3, 4));
console.log(sum());

//2
// function convertToObject(num) {
//    const obj = {
//       value: num,

//       isOdd: Boolean(num % 2),
//    };

//    return obj;
// }
const convertToObject = (num) => ({
   value: num,
   isOdd: Boolean(num % 2),
});
console.log(convertToObject(9));
