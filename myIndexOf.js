const arr = ['arrow', 'bow', 'coin'];

//myIndexOf function
function myIndexOf(arr, elt){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===elt){
            return i;
        }
    }
    return -1;
}

//testing myIndexOf
someElt = "bow";
console.log("myIndexOf: " + myIndexOf(arr, someElt));