const array = {weapon1: "arrow", weapon2: "bow", tool: "coin"};

//grabValues function
function grabValues(arr){
    const values = [];
    for(const key in arr){
        values.push(arr[key]);
    }
    return values;
}

//testing grabValues
console.log("grabValues: " + grabValues(array));