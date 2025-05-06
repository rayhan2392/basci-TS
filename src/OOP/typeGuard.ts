{
  //starts

  //type guard
  type AlphaNumeric = number | string;

  const add = (param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric => {
    if (typeof param1 === "number" && typeof param2 === "number")
      return param1 + param2;
    else {
      return param1.toString() + param2.toString();
    }
  };
  // this is called type guard
  const result1 = add('45',87)
  console.log(result1)


  //in guards

  type NormalUser ={
    name:string
  }

  type AdiminUser ={
    name:string,
    role:'admin'
  }

  const normalUser:NormalUser={
    name:'Rahi'
  }
  const adminUser:AdiminUser={
    name:'Shawn',
    role:"admin"
  }

  const getUser=(user:NormalUser|AdiminUser)=>{
        
        if('role' in user){
            console.log(`hey their, i'm ${user.name} & i'm an ${user.role}`)
        }
        else{
            console.log(`I'm ${user.name} & i'm a normal user`)
        }
  }
  getUser(normalUser)
  getUser(adminUser)

  //ends
}
