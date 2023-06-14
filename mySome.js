const arr = ['arrow', 'bow', 'coin'];

//mySome function
function mySome(arr, callBack){
    for(let i=0;i<arr.length;i++){
        if(callBack(arr[i])){
            return true;
        }
    }
    return false;
}

//callBack function for mySome and myEvery
function shortWord(elt){
    return elt.length <= 3;
}

//testing mySome
console.log("mySome: " + mySome(arr, shortWord));