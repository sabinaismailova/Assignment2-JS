
function range(elt1, elt2, diff){
    if(diff==null){
        diff = 1;
    }
    if(diff<0){
        diff = Math.abs(diff);
    }
    const arr = [];
    if(elt1>elt2){
        for(let i=elt1;i>=elt2;i-=diff){
            arr.push(i);
        }
    }
    else{
        for(let i=elt1;i<=elt2;i+=diff){
            arr.push(i);
        }
    }

    return arr;
}

function sum(callBack){
    const arr = callBack;
    let acc = 0;
    for(let i=0;i<arr.length;i++){
        acc += arr[i];
    }
    
    return acc;
}

let r = range(10, 1, 2);
console.log(sum(r));