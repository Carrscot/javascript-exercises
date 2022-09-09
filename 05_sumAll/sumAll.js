const sumAll = function(int1, int2) {
   let sum = 0;

   
   switch (true) {
    case int1 < 0 || int2 < 0 || !Number.isInteger(int1) || int2 < 0 || !Number.isInteger(int2):
        return 'ERROR';
        break;

    case int1 > int2:
        for ( i = int2; i <= int1; i ++){
            sum = sum + i
        }
        return sum;
        break;

    case int1 > 0 && int1 < int2:
        for ( i = int1; i <= int2; i ++){
            sum = sum + i
        }
        return sum
    }

}



// Do not edit below this line
module.exports = sumAll;
