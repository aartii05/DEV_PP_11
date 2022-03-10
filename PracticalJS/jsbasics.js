// print
console.log("Hello");
// declare variable
let a;
console.log(a);
a=10;
console.log("Variable a=",a);
a=10.1;
a="Hello I am a string";

// Variable types: Primitives types:number,string,boolean,null;
// JS only tells its a variable not its types
b=null;
c=true;
console.log(b);
console.log(c);

let number=10;
for(let i=1;i<=number;i++){
    console.log(i);
}

// Is Prime
let number1=23;
let flag=true;

for(let div=2;div<number1;div++){
    if(number1%div==0){
        flag=false;
        break;
    }
}
if(flag==true){
    console.log("Prime No",number1);

}

// Non primitive types: Functions,Arrays,Objects
// Function definition
function sayHi(param){
    //console.log("Hello");
    //console.log("Param received",param);
  let rval=  Math.random()>0.5?true:"less than 0.5";

    return rval;
}

// Function call
//sayHi(10);
//sayHi("Read it");
let val=sayHi([1,2,3,4]);
console.log(val);

// Objects-> Group of key value pair key:value
// key : value->property
// key:function-> method
let cap={
    name:"Steve",
    lname:"Rogers",
    address:{
        city:"Manhattan",
        state:"New York"
    },
    age:35,
    isAvenger:true,
    movies:["First Avenger","Civil War","Iron Man","Thor"],
    sayHii:function(){
        console.log("Hiii");
    }
    

};

// console.log(cap.age);
// console.log(cap.movies);
// console.log(cap.movies[2]);
// cap.sayHii();

// // Set/Update
// cap.age=36;
// console.log("cap:",cap);
// cap.isAvenger=false;
// console.log("cap:",cap)
// cap.friends=["Tony","Bruce","Peter"];
// console.log("cap:",cap);

// delete cap.isAvenger;
// console.log("cap:",cap);

for(let key in cap){
    console.log(key, ":",cap[key]);
}

let properkey="age";
console.log(cap[properkey]);

console.log(cap["age"]);
console.log(cap.age);
console.log(cap.xyz);

// array
let arr=[1,2,3,4,5];
console.log(arr);
console.log(arr.length);

// let i=0;
// while(i<arr.length){
//     console.log("elem at ",i ,"is",arr[i]);
//     i++;
// }

// push,unshift
arr.push("Last value");
arr.unshift("first value");
console.log(arr);
arr.shift();
arr.pop();
console.log(arr);

// splice,slice
// start index,end index 
// splice changes array
// slice does not change array
let partofarray=arr.slice(2,4);
console.log(partofarray);
console.log(arr);

arr.splice(2,1);
console.log(arr);

arr.splice(2,2);
console.log(arr);

// index of contains

