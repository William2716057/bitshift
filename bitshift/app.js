'use strict';
//function to shift binary bit one place to the right
function rightBitshift(binary) {

    let decimal = parseInt(binary, 2);

    //perform right bitshift by 1 place
    decimal = decimal >> 1;

    let shifted = decimal.toString(2);

    while (shifted.length < binary.length) {
        shifted = '0' + shifted;
    }

    return shifted;
}
    let OriginalBinary = '1010011';
    console.log("original binary: ", OriginalBinary);
    let shiftedBinary = rightBitshift(OriginalBinary);
    console.log("shifted binary: ", shiftedBinary);


