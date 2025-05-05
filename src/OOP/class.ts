

//class in oop

class Animal{
    name:string;
    species:string;
    sound:string
    constructor(name:string,species:string,sound:string){
        this.name=name,
        this.sound=sound,
        this.species=species
    }

    //function in a class is called method. Now we will write a method here
    //This is normal annonymous function not Arrow function
    makeSound(){
        console.log(`The ${this.name} sounds ${this.sound}`)
    }

}

//now create instance/object using this class

const dog= new Animal('Hablu','Dog','Ghew Ghew!!')
const cat= new Animal('Maklu','Cat','Mew Mew!!')

// console.log(dog,cat,dog.name);
cat.makeSound();


// If we look the whole code,we repeat the type multiple time. But typescript make it easier. We will do the same code more cleaner & simpler way

//declare the class 

class Animal2{
    constructor(public name:string,public species:string,public sound:string){}
    makeSound(){
        console.log(`The ${this.name} sounds ${this.sound}`)
    }
}

//Look how we make the class simpler with with parameters