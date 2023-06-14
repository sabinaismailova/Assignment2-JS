const arr = ['arrow', 'bow', 'coin'];

//myReduce function 
function myReduce(arr, callBack){
    let acc = '';
    for(let i=0;i<arr.length;i++){
        acc = callBack(acc, arr[i]);
    }
    return acc;
}

//callBack function for myReduce that combines strings into a single string
function combine(combination, elt){
    return combination + elt;
}

//testing myReduce
console.log("myReduce: " + myReduce(arr, combine));