//module.exports = 
function getPrimes(n){
    var primes = [];

    if (n === 0) {
        return "Invalid Input";
        // Check if input is type string
    } else if (typeof(n) === "string") {
        return false;

        // if input is a non positive 
    } else if (n < 0) {
        return false;
        // if input is an object
    } else if (typeof(n) === "object") {
        return false;

    } else if (n === undefined) {
        return "No input provided";
    }

    else if(isNaN(n)){
        return "Invalid number";
    }
    else if(typeof(n) === "Array"){
        return [];
    }
    else{
        for(var k=2;k<(n+1);k++){
            if(isPrime(k)){
                primes.push(k);
            }
        }
    }
    return primes;
}

function isPrime(num){
    var check = [];
    for(var j=2;j<num;j++){
        if(num%j==0){
            check.push(j);
        }
    }
    if(check.length>0){
        return false;
    }
    else{
        return true;
    }
}
