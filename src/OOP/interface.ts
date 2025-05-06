{
    //starts

//OOP--inheritance

//Lets define two normal class and a parent class then we will understand what ingeritance means

class Student{
    name:string;
    roll:number;
    school:string;
    constructor(name:string,roll:number,school:string){
        this.name=name
        this.roll=roll
        this.school=school
    }
    //lets define a method how many hours he will sleep
    getSleep(numberOfHours:number){
          console.log(`${this.name} will sleep ${numberOfHours} hours`)
    }
}

const student1 = new Student('Shawn',2211027121,'RU')
console.log(student1)

student1.getSleep(6)


//define a teacher class
class Teacher{
    name:string;
    roll:number;
    school:string;
    designation:string;
    constructor(name:string,roll:number,school:string,designation:string){
        this.name=name
        this.roll=roll
        this.school=school
        this.designation=designation
    }
    takeClass(noOfClass:number){
        console.log(`${this.name} will take ${noOfClass} class`)
    }
}

//if we notice there is some common elements between class student and teacher.We have repeat them both places. What if we can create a master class with common elements and extens in both class?sounds interesting right? lets see how we can do this

//lets name the class

class masterPerson{
    name:string;
    roll:number;
    school:string;
    constructor(name:string,roll:number,school:string){
        this.name=name
        this.roll=roll
        this.school=school
    }
    getSleep(numberOfHours:number){
        console.log(`${this.name} will sleep ${numberOfHours} hours`)
  }
}

// now we will create the student and teacher class extending the properties of masterPerson.

class Student2 extends masterPerson{
    //here extends means student2 class will have all the property from masterPerson class
    //this is called ingeritance
    constructor(name:string,roll:number,school:string){
        //passing the arguments to masterPerson class with super call
        super(name,roll,school)
    }
    
}

// teacher class

class Teacher2 extends masterPerson{
   
    designation:string;
    constructor(name:string,roll:number,school:string,designation:string){
        super(name,roll,school)

        //we keep designation here cause its unique property of teacher. Not common
        this.designation=designation
    }
    takeClass(noOfClass:number){
        console.log(`${this.name} will take ${noOfClass} class`)
    }
}

//here masterPerson shares the common properties of student and teacher .This process called 
//inheritance in OOP in TS


    //ends
}