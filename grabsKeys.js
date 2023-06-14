const array = {weapon1: "arrow", weapon2: "bow", tool: "coin"};

//grabKeys function 
function grabKeys(arr){
    const keys = [];
    for(const key in arr){
        keys.push(key);
    }
    return keys;
}

//testing grabKeys
console.log("grabKeys: " + grabKeys(array));