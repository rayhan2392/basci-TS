{
    //start

//create an async function to fetch data

//lets define a type for the upcoming data for type safey

type ToDo = {
    userId:number;
    id:number;
    title:string;
    completed:boolean
}

const getToDo =async():Promise<ToDo>=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()
    console.log(data)
    return data;
}

getToDo();



    //End
}