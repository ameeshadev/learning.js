//operators
let a=10;
let b=20;
let add=a+b;
console.log(add);
let sub=a-b;
console.log(sub);
let div=a/b;
console.log(div);
let mul=a*b;
console.log(mul);

//if else

let x=20;
let y=30;
if(x<y){
    console.log("good morning");
}
else if(x>y){
    console.log("good evening");
}
else{
    console.log("hello world");
}

//switch of

let day="friday";
switch(day){
    case 'monday':
        console.log("monday is a school opening day");
    case 'friday':
        console.log("friday is very colour full day");

}

//while loop

let i=0;
while(i<10){
    console.log(i);
    i++;

}
//while do loop

let j=1;
do{
    console.log(j);
    j++;
}
while(j<5)
//for loop
for(let A=0; A<5; A++){
    console.log(A);
    A++;
}
//Arrays
let data=["names","flowers","toys","vehicals"];
console.log(data.push());
console.log(data.pop());
console.log(data);

//arrays
let cars=[1,2,3,3,4,5,6,7,8,9,];
console.log(cars[2]);

//relational loop
let n="ameesha";
let m="afrid";
let get=n<m;
console.log(get);

//logical loop
let B=2,C=3,D=4
let result=B<C && B>C
let N=!result
console.log(result,N);




