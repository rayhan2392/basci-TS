{
    //Ternary Operator vs Nullish coalisant operator vs optional chaining
const age = 150;
if (age<=18){
    console.log("The baby is not adult")
}else
{
    console.log('The man is Adult')
}

//Nullish coalising operator
const isAuthenticated=undefined;

const result1 =isAuthenticated??'Guest'
console.log(result1)

//optional chaining

type Person={
    name:string,
    address:{
        city:string,
        presentAddress:string,
        permanentAddress?:string
    }
}

const person1:Person={
    name:'Shawn',
    address:{
        city:'Comilla',
        presentAddress:'Rajshahi'
    }
}
console.log(person1?.address?.permanentAddress??'No home')
}