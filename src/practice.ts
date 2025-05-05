{

    //start
//problem 1

// type NameAge=(name:string,age:number,roll?:'admin'|'user'|'guest')=>{

// }

const function1=(name:string,age:number,roll?:'admin'|'user'|'guest')=>{
   return{
    name:name,
    age:age,
    roll:roll
   }
}

const user1 =function1('Shawn',22,'admin')
// console.log(user1)

//Define interfaces Book and Magazine

interface Book{
name:string,
writer:string,
price:number,
isStock:boolean
}

interface Megazine{
    name:string,
    published:number,
    author:string,
    available:boolean
}

type Union= Book | Megazine

type Intersaction = Book & Megazine


//Reverse a string

const reverseString=(str:string):string=>{
          const reversedStr=str.split('').reverse().join('');

          return reversedStr;
}
const result2=   reverseString('shawn')
console.log(result2);

//spread and rest operator problem..

const returnSum=(...numbers:number[])=>{
    const sum =numbers
}

//End
}
