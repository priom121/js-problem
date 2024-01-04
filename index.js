// sum -----
function addNumber (num1 ,num2){
     return num1 + num2                         
}
let result = addNumber (5, 5)
// console.log(result);

// 1-10 
for(let i =0 ;i<10 ;i++){
   // console.log(i);
}

// odd number even number
for(let i =0; i<=20; i+=2){
   // console.log("odd",i);
}

for (let i=1; i<50 ; i+=2){
   // console.log("even num",i);
}

var array =[1,5,8,85]

for(let i=0; i<array.length ; i++){
   var arrays =array[i]
   // console.log(arrays);
}

// console.log(parseFloat(myFeet));

function InchToFeet (inches){
 let inche = inches /12;
 return inche
}
const dataInch = 150;
const totalInch = InchToFeet(dataInch)
// console.log(totalInch);


// Average marks some subjects
// 72.5,25,65,80,45,99
var mathMark = 72.5;
var chemistry =25;
var bangla =65;
var biologyMark =80
var physicsMark =45;
var english =99;

var totalMark = mathMark + chemistry + bangla +biologyMark +physicsMark +english;
 var average = totalMark / 6
 var decimal = average.toFixed(3)
//  console.log(parseFloat(decimal));


// Find the index of banana and remove the orange and add watermelon
var fruits =['apple','orange','banana']
 var bananaIndex =fruits.indexOf('banana')
//  var bananaIndex =fruits[0]
// console.log(bananaIndex);
fruits.pop()
fruits.push('watermelon')
// console.log(fruits);

