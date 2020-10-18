module.exports = function toReadable(number) {
    const obj = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    };
    let answer = '';
    let str = String(number);
    let firstSymbol;
    let secondSymbol;
    let thirdSymbol;
    if (number % 10 === number) {
        return obj[number]
    } else if (number % 100 === number) {
        if (str.charAt(1) === '0' || str.charAt(0) === '1') {
            return obj[number]
        } else {
            firstSymbol = Number(str.charAt(0) + 0);
            secondSymbol = Number(str.charAt(1))
            answer = obj[firstSymbol] + ' ' + obj[secondSymbol];
            return answer
        }
    } else if (number % 100 === 0) {
        firstSymbol = Number(str.charAt(0))
        answer = obj[firstSymbol] + ' ' + 'hundred'
        return answer
    } else if (number % 1000 === number) {
        firstSymbol = Number(str.charAt(0));
        if (str.charAt(1) === '1') {
            secondSymbol = str.charAt(1) + str.charAt(2);
            secondSymbol = Number(secondSymbol);
            answer = obj[firstSymbol] + ' ' + 'hundred' + ' ' + obj[secondSymbol];
            return answer
        } else if (Number(str.charAt(1) + str.charAt(2)) % 10 === 0) {
            secondSymbol = Number(str.charAt(1) + 0);
            answer = obj[firstSymbol] + ' ' + 'hundred' + ' ' + obj[secondSymbol];
            return answer
        } else if (str.charAt(1) === '0') {
            thirdSymbol = Number(str.charAt(2));
            answer = obj[firstSymbol] + ' ' + 'hundred' + ' ' + obj[thirdSymbol];
            return answer
        } else {
            secondSymbol = Number(str.charAt(1) + 0);
            thirdSymbol = Number(str.charAt(2));
            if (thirdSymbol === 0) {
                answer = obj[firstSymbol] + ' ' + 'hundred' + ' ' + obj[secondSymbol];
            } else {
                answer = obj[firstSymbol] + ' ' + 'hundred' + ' ' + obj[secondSymbol] + ' ' + obj[thirdSymbol];
            }
            return answer
        }
    }
}
