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

function reverseInPlace(arr){
    let first = '';
    const arrLast = arr[arr.length-1];
    let length = arr.length;
    let i=0;
    while(first!=arrLast&&i<length){
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        first = arr[0];
        i++;
        length--;
    }
    return arr;
}

console.log(reverse(arr));
console.log(reverseInPlace(arr));