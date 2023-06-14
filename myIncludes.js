const arr = ['arrow', 'bow', 'coin'];

//myIncludes function
function myIncludes(arr, elt){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===elt){
            return true;
        }
    }
    return false;
}

//testing myIncludes
elt = "bowes"
console.log("myIncludes: " + myIncludes(arr, elt));