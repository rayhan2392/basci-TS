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
        getBalance(){
            return this.balance
        }
        makeDeposit(amount:number){
            this.balance=amount+this.balance
        }
    }

// const user1=new BankAccount(111,'Shawn',34343) ;
//the balance property is private . if we want to see the balance or update it we cannot do this from out side of the class.we need to call a function
// user1.makeDeposit(34)

// console.log(user1.getBalance())


//you might be notice that we need to call a function every time to access or update any date which is private.
//to solve this problem we will use getter and setter .It will let us manupulate 
//privae data easily while keeping it safe.

//lets see how can we do the same with getter and setter function


class BankAccount1{
    id:number;
    name:string;
    private balance:number
    constructor(id:number,name:string,balance:number){
        this.id=id
        this.name=name
        this.balance=balance
    }
    get seeBalance(){
        return this.balance
    }
   set makeDeposit(amount:number){
        this.balance=amount+this.balance
    }
}

const user2=new BankAccount1(111,'Shawn',10) ;
//the balance property is private . if we want to see the balance or update it we cannot do this from out side of the class.we need to call a function
user2.makeDeposit=30
console.log(user2.seeBalance)

//here we can access the private property balance but with safety 
//this is how getter and setter function works


    //ends
}