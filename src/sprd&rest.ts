{
//Spread operator

//For array

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

//explanation:its like copy the elements of arr1 and arr2 into arr3

//For object

const persson={
    name:'Shawn',
    age:22,
}

const address={
    city:'Dhaka',
    country:'Bangladesh'
}
const user={
    ...persson,
    ...address,
    isMarried:false
}
//explanation:its like copy the properties of persson and address into user object

//Rest operator

const addNumbers=(...numbers:number[]):number=>{
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        sum+=numbers[i]
    }
    return sum
}
addNumbers(1,2,3,4,5,6,7,8,9,10) //55

//explanation:its like collecting all the arguments into an array called numbers






}





