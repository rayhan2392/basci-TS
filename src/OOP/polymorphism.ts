{
    //starts
//Polymorphism

class Person{
    getSleep(){
        console.log('I am normal person , i sleep 8 hours a day')
    }
}

class Student extends Person{
    getSleep(){
        console.log('I am a student, I sleep 7 hours a day')
    }
}

class Developer extends Person{
    getSleep(){
        console.log('I am a Developer, I sleep 6 hours a day')
    }
}

//lets make there instance using this class and child

const person1 = new Person()
const person2 = new Student()
const person3 = new Developer()


//now create a function to get sleeping hours of different person's

const getSleepingHours=(person:Person)=>{
        person.getSleep();
}

getSleepingHours(person1); //I am normal person , i sleep 8 hours a day
getSleepingHours(person2); //I am a student, I sleep 7 hours a day
getSleepingHours(person3); //I am a Developer, I sleep 6 hours a day


// we see for same method getSleep(), we are getting different output for different person
// this is called polymorphism 

//another example

class Shape{
    getArea(){
        return 0;
    }
}

class Circle extends Shape{
    radius:number
    constructor(radius:number){
        super()
        this.radius =radius
    }
    getArea(): number {
        return Math.PI * this.radius*this.radius
    }
}

class Rectangle extends Shape{
    height:number;
    weight:number
    constructor(height:number,weight:number){
        super()
        this.height=height
        this.weight=weight
    }
    getArea(): number {
        return this.weight * this.height
    }
}

 const getShapeArea =(param:Shape)=>{
    console.log(param.getArea())
 }

 const shape1 = new Shape();
 const shape2 = new Circle(10);
 const shape3 = new Rectangle(10,10);

 getShapeArea(shape1);
 getShapeArea(shape2);
 getShapeArea(shape3);


    //ends
}