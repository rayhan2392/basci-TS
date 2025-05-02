{
    //

//type Alias vs interface
//declaration of a user using type 

type user1 = {
    name:string,
    roll:number,
    email:string
}

//declarion of  a user ussing interface

interface user2 {
    name:string,
    roll:number,
    email:string
}

//interface can be only used for no primitive datatype like array and object

//defining an array with both type and interface

//with type

type RollNumber=number[];

const rollNumber:RollNumber=[12,35,353,353]


console.log(rollNumber)

//with interface

interface Salary{
   [index:number]:number
}


const monthlySalary:Salary=[23,23,23,23,943,2983,238,238]

console.log(monthlySalary)





    //
}