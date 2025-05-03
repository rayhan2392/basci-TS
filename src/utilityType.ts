{
    //

    // Uitility type
   type User={
    name:string;
    age:number;
    email?:string;
    contactNumber:string
   }
    // pick type

    // picking the name type for from user
   type Name=Pick<User,'name'>
    //

    //omit type means minus specific types

    type ContactInfo=Omit<User,'name'|'age'> //minus name and age type from user



    //required type , make required every type

    type requiredUser = Required<User> 
    //here every type of User is Required.But in main User type email was optional

    //Partial type, make every type optional

    type PartialUser = Partial<User>
    //here every single type of user is optional here

    //Read only type means we cannnot change value of an object
    //lets make an user with our type alias 
    const user1:User={
        name:'Shawn',
        age:22,
        contactNumber:'01401670841'
    }

    //if we want we can change the value of user1's name ,age or contacktnumer
     user1.name='karim' //we can re-assign value here


    //But we can restrict them with read only type 
    //let make similar user 

    type ReadOnlyUser = Readonly<User>

    const user2:ReadOnlyUser= {
        name:'Arnab',
        age:22,
        contactNumber:'lsdfhasdjfa'
    }

      //now we cannot reassign values beacuase of readonly type

      //Record utility Type
      //its like defining key and values of an object

      type MyObject =Record<string,number>

      const obj1:MyObject={
        age:22,
        roll:2211027121
        
      }
    
}