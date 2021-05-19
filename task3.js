let arr = ["cat", "dog", "parrot", "horse"]
let find = "parrot"
console.log(arr.indexOf(find))
for(let i =0; i<arr.length; i++){
    if(arr[i]==find){
        console.log(i)
    }
}
arr.forEach((element,i) => {
    if(element == find){
        console.log(i)
    }
});