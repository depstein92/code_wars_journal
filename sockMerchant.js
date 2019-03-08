/*
John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

For example, there are  socks with colors . There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

Function Description

Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

sockMerchant has the following parameter(s):

n: the number of socks in the pile
ar: the colors of each sock
Input Format

The first line contains an integer , the number of socks represented in .
The second line contains  spa
*/

function sockMerchant(n, ar) {

    let map = {};

    for (let i = 0; i < ar.length; i++) {
        if (!map.hasOwnProperty(ar[i])) {
            map[ar[i]] = 1;
        } else {
            map[ar[i]] += 1;
        }
    }

    let objectPairs = Object.entries(map);
    let numberOfPairs = 0;

    for (let key in objectPairs) {
        let value = objectPairs[key][1];
        console.log('value', value);
        if (value => 2) {
            let pairs = Math.floor(value / 2);
            console.log('pairs', pairs)
            numberOfPairs += pairs;
        }
    }
    return numberOfPairs;
}
