// Count number of occurrences (or frequency) in a sorted array using java script

function countOccurrences(arr){
    const occurrences = {};

    for(let i=0;i<arr.length;i++){
        const currentElement = arr[i];

        if(!occurrences[currentElement]){
            occurrences[currentElement] = 1;

        } else {
            occurrences[currentElement]++;
        }
    }
    return occurrences;
}

const sortedArray = [1,1,2,2,3,3,3,4,4,5,5,5,5,5];

const result = countOccurrences(sortedArray);

console.log(result);
// ---------------------------------------------

// Find Subarray with given sum - Given an array arr[] of non-negative integers and an integer sum, find a subarray that adds to a given sum.


function findSubarrayWithSum(arr,targetSum){
    let currentSum = 0;
    let start = 0;

    for(let end = 0;end <arr.length;end++){
        currentSum += arr[end];

        while (currentSum > targetSum && start <= end){
            currentSum -= arr[start];
            start++;
        }

        if(currentSum === targetSum){
            return [start,end];
        }
    }
}

const arr = [1, 4, 20, 3, 10, 5];
const targetSum = 33;

const result2 = findSubarrayWithSum(arr, targetSum);

console.log(result2)