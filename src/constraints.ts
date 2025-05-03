{
    //

const addCourseToStudents=<T extends {id:number,name:string,email:string}>(student:T)=>{
    const course= 'AI Powered Development Bootcampt'
    return{
        ...student,
        course
    }
}

const student1 = addCourseToStudents({name:'Shawn',id:122,email:'shawn@gmail.com'})
console.log(student1)


//now lets see what is constraints
//in above example, we can put anything as student details.But if we want to enforce some 
//types which is must have we can do this . lets see how


    //
}