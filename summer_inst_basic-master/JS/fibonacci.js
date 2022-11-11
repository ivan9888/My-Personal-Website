
/*
    Fibonacci Sequence - Enter a number and have the program
    generate the Fibonacci sequence to that number or to the Nth number.
*/
// This array will keep memory of the previous fibonacci numbers
var memo = {};
function fibonacci() {
    "use strict";
    var n = document.getElementById("num").value;
    var val = f(n);
    document.getElementById("fibonacciLbl").textContent = val;
    //return f;
}

function f(n) {

    var fn=0;
    f1=1;
    f2=1;
    var value=f1.toString() + ", " + f2.toString();
    
    // Check if the memory array already contains the requested number
    if (memo.hasOwnProperty(n)) {
        value = memo[n];
    } else {
        //TODO: Implement the fibonacci function here!
        while (fn<=n){
            fn=f2+f1
            if(fn<=n){
                value=value + ", " + fn.toString();
                f1=f2;
                f2=fn;
            }

        }
        memo[n] = value;
    }

    return value;
}

//console.log(fibonacci(15));