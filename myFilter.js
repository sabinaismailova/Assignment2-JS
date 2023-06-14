const arr = ['arrow', 'bow', 'coin'];

//myFilter function 
function myFilter(arr, callBack){
    const filtered = [];
    for(let i=0;i<arr.length;i++){
        if(callBack(arr[i])){
            filtered.push(arr[i]);
        }
    }
    return filtered;
}

//callBack function
function condition(elt){
    return elt.length > 3;
}

//testing myFilter
console.log("myFilter: " + myFilter(arr, condition));