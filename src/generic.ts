{
    //generic types

    //normal type

    const friends:string[]=['shawn','arnab','sadi','masud','muzahid']

    //write the above array with generic type

    const friends1:Array<string>=['rafi','naim','shanto']


    // const salaries:number[]=[112434,123123,1231,124124];

    const salaries:Array<number>=[112434,123123,1231,124124];

//normal type

    // const boolArrays:boolean[]=[true,false,true,true,false]
//   generic type
    const boolArrays:Array<boolean>=[true,false,true,true,false]

//we can also write dynamic generic type
    type GenericType<T>=Array<T>

    const roll:GenericType<number>=[23]

//generic type for tuple

type User<x,y> =[x,y]

const user:User<number,{name:string,email:string}> = [12354, {name:'shawn',email:'a@gmai.com'}]



    //
}