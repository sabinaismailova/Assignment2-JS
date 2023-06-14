const arr = ['arrow', 'bow', 'coin'];

//myMap function
function myMap(arr, callBack){
    const mapped = [];
    for(let i=0;i<arr.length;i++){
        mapped[i] = callBack(arr[i]);
    }
    return mapped;
}

//callBack function
function extension(elt){
    return elt + '--bc'; 
}

//testing myMap function
console.log("myMap: " + myMap(arr, extension));