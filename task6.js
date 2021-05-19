const person = {
    firstName: 'Jack',
    lastName: 'Sparrow',
    age: 25,
    location: 'Caribbean sea',
  }

  for(let prop in person){
    console.log(`${prop}: ${person[prop]}`)
  }
console.log("")

  for(let prop in person){
    switch(prop){
        case "firstName":
            console.log(`First name: ${person[prop]}`)
            break;
        case "lastName":
            console.log(`Last name: ${person[prop]}`)
            break;
        case "age":
            console.log(`Age ${person[prop]} ages`)
            break;
        case "location": 
        console.log(`Where to find: ${person[prop]}`)
        break;
    }
  }
