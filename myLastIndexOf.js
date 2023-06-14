const arr = ['arrow', 'bow', 'coin'];

//myLastIndexOf function 
function myLastIndexOf(arr, elt){
    let index = -1;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===elt){
            index = i;
        }
    }
    return index;
}

//testing myLastIndexOf
someElt = "bow";
console.log("myLastIndexOf: " + myLastIndexOf(arr, someElt));