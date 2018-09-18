
/*An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a
given series of numbers. You are provided with consecutive elements of an
Arithmetic Progression. There is however one hitch: exactly one term from
the original series is missing from the set of numbers which have been given to you.
The rest of the given series is the same as the original AP. Find the missing term.

You have to write the function findMissing(list),
list will always be at least 3 numbers. The missing term will never be the first or last one.
*/


var findMissing = function(list) {
    let diff = getNumberDiff(list),
        copy = [...list];

    for (let i = 0; i < list.length; i++) {
        if ((list[i] + diff) !== list[i + 1]) {
            //copy.splice(list.indexOf(list[i + 1]), 0, copy[i] + diff);
            return copy[i] + diff;
        }
    }

}

function getNumberDiff(list) {
    let arr = new Array();

    for (let i = 0; i < list.length; i++) {
        arr.push(Math.abs((list[i] - list[i + 1])));
    }

    let h = arr.filter((obj) => !!obj),
        f = new Array();

    if (list.length <= 3) {
        let j = h.sort((a, b) => {
            return b - a;
        });
        return Math.abs(j[0] - j[1]);
    } else {

        for (let x = 0; x < h.length; x++) {
            if (h[x] !== h[x + 1]) {
                h.splice(h.indexOf(h[x + 1]), 1);
            }
        }
    }
    return h[0];
}
