/** Introduction to generics  */


function addValues<T>(arg:T) :T {
    return arg;
}


let result: {<Number>(arg:Number): Number} = addValues
console.log(result);