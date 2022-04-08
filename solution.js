// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort((a, b) => a - b);
    if(A[0] != 1) return 1;

    var result = 1;
    var arrLength = A.length;
    if(arrLength == 1) {
        result = A[0] == 1? A[0] + 1 : 1;
    } else {
        for(let i = 0; i < arrLength; i++) {
            if(A[i] + 1 < A[i + 1] || i == arrLength - 1) {
                result = A[i] + 1;
                break;
            }
        }  
    }
    return result;
}
