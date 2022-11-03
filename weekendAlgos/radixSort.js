function getDigit(num, place) {
    return Math.floor(Math.abs(num)/ Math.pow(10, place)) % 10;
}

function digitCount(num) {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(nums){
    let maxDigits = 0;
    for(let i = 0; i < nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits;
}

// [456,548,75,1798,424]
function radixSort(arrOfNums){
    let maxDigitCount = mostDigits(arrOfNums);

    for(let i = 0; i< maxDigitCount; i++){

        let digitBuckets = Array.from({length:10},()=> [])

        for(let j = 0; j < arrOfNums.length; j++){
            let digit = getDigit(arrOfNums[j], i);
            digitBuckets[digit].push(arrOfNums[j]);
        }

        arrOfNums = [].concat(...digitBuckets)
    }

    return arrOfNums
}

console.log(radixSort([45818,548638,4515684,578,451684,3548,254928]))



const testArr = [45818,548638,4515684,578,451684,3548,254928]
let digitBuckets = Array.from({length:10,step:3},()=> [])
console.log(digitBuckets)


