const arr = ['arrow', 'bow', 'coin'];

//myEach function
function myEach(arr, callBack){
    for(let i=0;i<arr.length;i++){
        callBack(arr[i]);
    }
}

//callBack function 
function print(elt){
    console.log(elt); 
}

//testing myEach function 
console.log("myEach: " + myEach(arr, print));