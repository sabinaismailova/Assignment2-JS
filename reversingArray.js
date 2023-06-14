const arr = [1, 2, 3, 4, 5];

function reverse(arr){
    const revArr = [];
    let j = 0;
    for(let i=arr.length-1;i>=0;i--){
        revArr[j] = arr[i];
        j++;
    }
    return revArr;
}

console.log(reverse(arr));