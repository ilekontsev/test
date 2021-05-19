
let arr = ["cat", "dog", "parrot", "horse", "fish", "chicken", "lion"]
let dItem = "cat"
let arrB =[]
for(let i =0, j=0; i<arr.length; i++){
    if(arr[i]!=dItem){
         arrB[j] = arr[i]
         j++
    }

}
console.log(arrB)
//удалить первый элемент 
arr.shift()
console.log(arr)
//удаление последних 2 элементов
let i = 0
do{
    arr.pop()
    i++
}while(i != 2)
console.log(arr)
