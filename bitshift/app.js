'use strict';
//function to shift binary bit one place to the right
function rightBitshift(binary) {
    //parse binary string and convert it to integer
    let decimal = parseInt(binary, 2);

    //perform right bitshift by 1 place
    decimal = decimal >> 1;
    //converts number to a binary string and saves as shifted
    let shifted = decimal.toString(2);
    //ensures that result has same length as original binary and 
    //will add leading zeros if too short
    while (shifted.length < binary.length) {
        shifted = '0' + shifted;
    }

    return shifted;
}   //print results
    let OriginalBinary = '1010011';
    console.log("original binary: ", OriginalBinary);
    let shiftedBinary = rightBitshift(OriginalBinary);
    console.log("shifted binary: ", shiftedBinary);


