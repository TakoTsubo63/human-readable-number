module.exports = function toReadable (number) {
    let ones = new Array('', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' );
    let twice = new Array ('', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen');
    let tens = new Array('', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety');
    let hundred = ' hundred';
    let output = '';
    let numString = number.toString();

    if (number == 0) {
        return 'zero';
    }
    if (number < 20) {
        output = ones[number];
        return output;
    }
    
    if (number < 99 && number % 10 === 0) {
        output += tens[parseInt(numString.charAt(0))] ;
        return output;
    }
    if (number > 20 && number < 100 ) {
        output += tens[parseInt(numString.charAt(0))] + ' ';
        output += ones[parseInt(numString.charAt(1))];
        return output;
    }
    if (number >100 && number < 110) {
        output = ones[parseInt(numString.charAt(0))] + hundred + ' ';
        output += ones[parseInt(numString.charAt(2))];
        return output;
    }
    if (number >110 && number < 120) {
        output = ones[parseInt(numString.charAt(0))] + hundred + ' ';
        output += twice[parseInt(numString.charAt(2))];
        return output;
    }
    if (number >200 && number < 210) {
        output = ones[parseInt(numString.charAt(0))] + hundred + ' ';
        output += ones[parseInt(numString.charAt(2))];
        return output;
    }
    if (number >210 && number < 220) {
        output = ones[parseInt(numString.charAt(0))] + hundred + ' ';
        output += twice[parseInt(numString.charAt(2))];
        return output;
    }
    if (number >300 && number < 310) {
        output = ones[parseInt(numString.charAt(0))] + hundred + ' ';
        output += ones[parseInt(numString.charAt(2))];
        return output;
    }
    if (number >310 && number < 320) {
        output = ones[parseInt(numString.charAt(0))] + hundred + ' ';
        output += twice[parseInt(numString.charAt(2))];
        return output;
    }
    if (number >400 && number < 410) {
        output = ones[parseInt(numString.charAt(0))] + hundred + ' ';
        output += ones[parseInt(numString.charAt(2))];
        return output;
    }
    if (number >410 && number < 420) {
        output = ones[parseInt(numString.charAt(0))] + hundred + ' ';
        output += twice[parseInt(numString.charAt(2))];
        return output;
    }
    if (number >500 && number < 510) {
        output = ones[parseInt(numString.charAt(0))] + hundred + ' ';
        output += ones[parseInt(numString.charAt(2))];
        return output;
    }
    if (number >510 && number < 520) {
        output = ones[parseInt(numString.charAt(0))] + hundred + ' ';
        output += twice[parseInt(numString.charAt(2))];
        return output;
    }
    if (number >600 && number < 610) {
        output = ones[parseInt(numString.charAt(0))] + hundred + ' ';
        output += ones[parseInt(numString.charAt(2))];
        return output;
    }
    if (number >610 && number < 620) {
        output = ones[parseInt(numString.charAt(0))] + hundred + ' ';
        output += twice[parseInt(numString.charAt(2))];
        return output;
    }
    if (number >700 && number < 710) {
        output = ones[parseInt(numString.charAt(0))] + hundred + ' ';
        output += ones[parseInt(numString.charAt(2))];
        return output;
    }
    if (number >710 && number < 720) {
        output = ones[parseInt(numString.charAt(0))] + hundred + ' ';
        output += twice[parseInt(numString.charAt(2))];
        return output;
    }
    if (number >800 && number < 810) {
        output = ones[parseInt(numString.charAt(0))] + hundred + ' ';
        output += ones[parseInt(numString.charAt(2))];
        return output;
    }
    if (number >810 && number < 820) {
        output = ones[parseInt(numString.charAt(0))] + hundred + ' ';
        output += twice[parseInt(numString.charAt(2))];
        return output;
    }
    if (number >900 && number < 910) {
        output = ones[parseInt(numString.charAt(0))] + hundred + ' ';
        output += ones[parseInt(numString.charAt(2))];
        return output;
    }
    if (number >910 && number < 920) {
        output = ones[parseInt(numString.charAt(0))] + hundred + ' ';
        output += twice[parseInt(numString.charAt(2))];
        return output;
    }
    if (number < 999 && number % 100 === 0) {
        output = ones[parseInt(numString.charAt(0))] + hundred ;
        return output;
    }
    if (numString.length == 3 && number % 10 === 0) {
        output = ones[parseInt(numString.charAt(0))] + hundred + ' ';
        output += tens[parseInt(numString.charAt(1))];
        return output;
    }
    if (numString.length == 3) {
        output = ones[parseInt(numString.charAt(0))] + hundred + ' ';
        output += tens[parseInt(numString.charAt(1))] + ' ';
        output += ones[parseInt(numString.charAt(2))];
        return output;
    }
    
    
}
