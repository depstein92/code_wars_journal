/*Your job is to write a function which increments a string, to create a new string. If the string already ends with a number, the number should be incremented by 1. If the string does not end with a number the number 1 should be appended to the new string.

Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.*/


function incrementString(strng) {

    let num = strng.match(/\d+/) ? strng.match(/\d+/)[0] : '',
        word = strng.replace(/\d+/, ''),
        numArr = num.split(''),
        zeroArr = new Array();

    if (num === "") {
        return word + '1';
    }


    for (let i = 0; i < numArr.length; i++) {
        if (num[0] !== '0') {
            break;
        } else {
            zeroArr.push(num[0]);
        }
    }

    if (zeroArr.length === 0) { /*if no zeros*/
        return word + (parseInt(num) + 1).toString();
    }

    if (zeroArr.length === num.length) { /*if all zeros*/
        zeroArr.pop();
        return word + zeroArr.join('') + (parseInt(num) + 1).toString();
    }

    return word + ((parseInt(num) + 1).toString());
}
