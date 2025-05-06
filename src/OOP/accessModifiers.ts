{
    //starts
class BankAccount{
    id:number;
    name:string;
    private balance:number
    constructor(id:number,name:string,balance:number){
        this.id=id
        this.name=name
        this.balance=balance
    }
}

   const user1= new BankAccount(12,'Shawn',424324);
   //now all the properties of bank account is public
   // so we can access it from any where
   user1.name

   //if we make a property private it will only accessible within the class
    // user1.balance   not accessible

    //if we make something

    //ends
}