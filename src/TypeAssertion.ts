{
//    
//Type assertion

//Type assertion means when you as a developer know the type better than typescript for example

let name:any ;


name =8375;


const fullName= name as number + 'Rayhanul'
console.log(fullName)

//here we as a developer confirms ts that the type of name will be number and we write (name as number) this is the syntax.This is actually type assertion

//
}