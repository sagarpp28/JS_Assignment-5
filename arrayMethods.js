const arr1 = ["lion","tiger","elephant"]
const arr2 = ["car","bike","bus","auto"]
const arr3 = [2,12,25,8,11]

// Concat
const newarray = arr1.concat(arr2)
console.log(newarray);

// Every
const ages = [32, 33, 16, 40];

let age=ages.every(function (ages){
    if(ages>=18){
        return true
    }
})
console.log(age);

// Fill
let s= arr1.fill("cat");
console.log(s);

// Find
function fnd(num){
    return num>=8;
}
console.log(arr3.find(fnd));

// Findindex
const s = (elem)=>elem>13;
console.log(arr3.findIndex(s));

// Flat
const num = [1, 2, [3, 4, 5]];
const flatNum = num.flat();
console.log(flatNum);

// ForEach
arr1.forEach((element) => 
console.log(element))

// Includes
console.log(arr1.includes("lion"));

// Indexof
console.log(arr1.indexOf('tiger'));

// Join
let s = ["Welcome", "home"];
let merge = s.join();
console.log(merge);

// lastindexOf
const lastIndex = arr1.lastIndexOf('tiger');
console.log(lastIndex);

// pop
arr1.pop('tiger');
console.log(arr1);

// push
arr1.push('hyena','bear')
console.log(arr1);

// Reverse
const rev = arr1.reverse();
console.log(arr1);

// unshift
arr3.unshift(4, 5);
console.log(arr3);

// shift
const firstElement = arr3.shift()
console.log(firstElement)
console.log(arr3);

// slice
console.log(arr2.slice(2));
console.log(arr2);

// some
const even = (element) => element % 2 === 0;
console.log(arr3.some(even));

// sort
arr2.sort();
console.log(arr2);

// splice
arr2.splice(1,1,'rocket')
console.log(arr2);

// Tostring
let string= arr2.toString();
console.log(string);

// filter
let s= arr3.filter((num)=>{
    if(num<11){
        return num;
    }
})
console.log(s);

// reduce
let s= arr3.reduce((x,y)=>{
    return x+y;
})
console.log(s);

// map
let s= arr3.map((x) => x * 2);
console.log(s);