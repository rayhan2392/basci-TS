{
//

//Union Types
type Developer= 'Fakibazz' | 'Serious'  //String Literal Type


const rkshawn:Developer='Serious'

//Union type is same as OR operatro of javascript

//Intersection Type

type FrontendDeveloper={
    skills:string[],
    designation1:'frontend Developer'
}

type BackendDeveloper ={
    skills:string[],
    designation2:'Backend Developer'
}

type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

const shawn:FullStackDeveloper={
    skills:['HTML', 'CSS', 'JS','REACT','MONGODB','Express','NODE'],
    designation1:'frontend Developer',
    designation2:'Backend Developer'
}

//Intersection is like AND operator of javascript



}