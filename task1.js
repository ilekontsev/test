

let str = "Я изучаю JavaScript"

let value = 0
console.log(str[value])
console.log(str.split("")[value])
console.log(str.slice(value, value+1))
console.log(str.substr(value, value+1))
for(let i =0; i<str.length; i++){
    if(i == value){
        console.log(str[i])
        break
    }
}

lastSymbol =str.length-1
console.log(str.substr(lastSymbol))
console.log(str[lastSymbol])
console.log(str.split("")[lastSymbol])
console.log(str.slice(lastSymbol))
console.log(str.slice(-1))
value = lastSymbol
for(let i =0; i<str.length; i++){
    if(i == value){
        console.log(str[i])
        break
    }
}