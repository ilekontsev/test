
let user ={
    firstName: "Mark",
    lastName: "Bush",
    age: 31,
    
}
let admin ={
    firstName: "Mark",
    lastName: "Bush",
    age: 31,
    
}

function compar(obj1, obj2){
   
    return JSON.stringify(obj1) == JSON.stringify(obj2)

}
console.log(compar(user,admin))