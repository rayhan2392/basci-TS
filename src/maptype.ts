{
    //start

//map type in typescript

//lets see how we can turn a type into another manually

type AreaNumber={
    height:number;
    weight:number
}

//now we want to convert the type into string mannually

// type AreaString={
//     height:string;
//     weight:string
// }

//Pretty boring right?We need to write the hardcode whole thing again manually

//here comes type maping .lets see how we can convert with type mapping dynamically

type AreaString={
    [key in keyof AreaNumber]:string
}

//see how we change the type dynamically? Its the power of type mapping






    //end
}