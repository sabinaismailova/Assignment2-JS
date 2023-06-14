const arr = ['arrow', 'bow', 'coin'];

//myPush function
eltToAdd = "some";
function myPush(arr, elt){
    let tempLength = arr.length;
    arr[tempLength] = elt;
    tempLength++;
    arr.length = tempLength;
    return arr;
}

//testing myPush
console.log("myPush: " + myPush(arr, eltToAdd));