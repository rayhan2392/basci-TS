{
//normal function

const returnArray =(param:string):string[]=>{
    return [param]
}

const result1=returnArray('Shawn')
console.log(result1)


//lets make the parameter type dynamic with generic

const retutnArrayWithType =<T>(param:T):T[]=>{
    return [param]
}

const result2= retutnArrayWithType<boolean>(false)
console.log(result2)

//generic with tuple type

const returnTuple=<x,y>(param1:x , param2:y):[x,y]=>{
    return [param1,param2]
 }

 const resultTuple = returnTuple<number,{name:string}>(124,{name:'Shawn'})

 console.log(resultTuple)


//
}