const arr = ['arrow', 'bow', 'coin'];

//myEvery function 
function myEvery(arr, callBack){
    for(let i=0;i<arr.length;i++){
        if(!callBack(arr[i])){
            return false;
        }
    }
    return true;
}

//callBack function for mySome and myEvery
function shortWord(elt){
    return elt.length <= 3;
}

//testing myEvery
console.log("myEvery: " + myEvery(arr, shortWord));