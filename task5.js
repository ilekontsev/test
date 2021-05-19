let arr =[31, 10, "chicken", 9, "fish", 10]
let value = 10;
let arrB=[]
let arrC=[]
for(let i=0, j=0,k=0; i<arr.length; i++){
    if(typeof(arr[i]) == "string"){
        arrB[j] = arr[i]
        j++
    }
    //оставляет value =10
    else if(arr[i] == value){
        arrC[k] = arr[i]
        k++
    }
}
console.log(arrB)
console.log(arrC)
//массив со строками
console.log(arr.filter(function(item){
    if(typeof item == "string"){
        return item
    }
}))
//массив с значением
console.log(arr.filter(function(item){
    if(item == value){
        return item
    }
}))