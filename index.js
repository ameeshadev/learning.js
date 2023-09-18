//operators
let num1=6;
let num2=10;
let num3=4;
let add=num1+num2+num3;
console.log(add);
let sub=num1-num2-num3;
console.log(sub);
let mul=num1*num2*num3;
console.log(mul);
let div=num1/num2/num3;
console.log(div);

//relational  operators
let a="ameesha";
let b="ameerunisa";
let result=a<b;
console.log(result);

//logical operators
let c=10;
let d=12;
let data=c<d && c>d;
let n=!data;
console.log(data,n);


//if else
let first="ameesha";
let anothername="afrid";
if( first=anothername){
    console.log("first one is a wrong");
}
else if(first!=anothername){
    console.log("is right");
}
else{
    console.log("wrong");
}

//switch case

let day="monday";
switch(day){
    case 'monday':
        console.log("monday is a school open");
            break;
    case 'sunday':
        console.log("sunday is a hollyday");
    default:
        console.log("good morning");
}
