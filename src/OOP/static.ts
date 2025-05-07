{
    //starts
 class Counter{
    count:number=0
    increment(){
        return (this.count=this.count+1)
    }
    decrement(){
        return(this.count=this.count-1)
    }
 }

 //now create two instance of class Counter

 const instance1= new Counter();   // different memory allowcation
 const instance2= new Counter();   // different memory allowcation

 instance1.increment();  //
 instance2.increment();
 console.log(instance1)// {count:1}  
 console.log(instance2)// { count:1}


//we can see , for every new instance , the counter value is starting from 0. Its called dynamic 
// memory allowcation.

//if we want to keep the memory allowcation static, means the memory will be same for every new 
// instances , we can do this with static keyoword . lets see how


//static memory allowcation
class Counter1{
   static count:number=0
   increment(){
    return Counter1.count=Counter1.count+1

   }
   decrement(){
    return Counter1.count=Counter1.count-1
   }
    }
 

 //now create two instance of class Counter

 const instance_1= new Counter1();   // different memory allowcation
 const instance_2= new Counter1();   // different memory allowcation
 instance_1.increment();  //
 instance_2.increment();
 instance_2.increment();
 instance_2.increment();
 instance_2.increment();
 instance_2.increment();
 
 console.log(Counter1.count)// {count:1}  
 

    //ends
}