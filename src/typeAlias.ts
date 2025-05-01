{
//type alias for object

type Student={
    name:string,
    age:number,
    contact:string,
    address:string
}

//now write an actual object of type student

const student1:Student={
    name:"John",
    age:20,
    contact:"1234567890",
    address:"123 Main St"
}
//writing the type sepearately and use it for multiple objects is callled type alias

//for string
type IsAdmin=boolean;

const isAdmin:IsAdmin=false;

//for function define the type structure of the function
type Add=(num1:number,num2:number)=>number;

//now write a function of type Add
const add:Add=(num1,num2)=>{
    return num1+num2;
}

//
}