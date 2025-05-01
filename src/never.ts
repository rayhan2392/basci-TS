//Never , unknown and nullable type

//Nullable type

const search=(value:string|null)=>{
    if(value){
        console.log('Searching')
    }
        else{
            console.log('Nothing to search')
        }
    }
search(null)


//unknown type

const convertToMeterPerSecond=(value:unknown)=>{
     if(typeof(value)==='number'){
        const convertedValue= value*1000/3600
        console.log(`The converted value is ${convertedValue} ms^-1`)
     }
     else if(typeof(value) ==='string'){
        const [numberValue,unit]=value.split(' ')
        console.log(numberValue)
        const convertedValue= (parseFloat(numberValue)*1000)/36
        console.log(`The converted value is ${convertedValue} ms^-1`)
     }
     else{
        console.log('Invalid Input')
     }
}

convertToMeterPerSecond('19 kph')