//functions in typescript

//Normal function
function multiply(num1:number,num2:number):number{
    return num1*num2
}

//Arraw function
const Add = (a:number,b:number):number=>a+b;

//Object ---> function --> method
//when a function is defined inside an object, it is called a method

const poorUser={
    firstName:'Shawn',
    balance:0,
    addBalance(balance:number):number{
        return this.balance+balance
    }
}

//In above example, addBalance is a method of poorUser object.


const normalNumbers:number[]=[1,2,3,4,5,6,7,8,9,10];

const squaredNumbers:number[]=normalNumbers.map((num:number):number=>num*num);