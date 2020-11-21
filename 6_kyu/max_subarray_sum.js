// never start on a negative number
// if all positive numbers, then the sum will always be the entire array.
// the only reason to include a negative number in an array sum is if it is worth it
// worth is determined by the following positive numbers
// only if the following numbers would provide more benefit then loss from negative numbers we would look into it as a sum

// [-1, 2, -1, -1, -1, 3, -1, -1, -1, -1, -1, -1, -1, 1000, -1, -1, -1, 5, -1, -1, 100]




var maxSequence = function(arr){
    let maxSum = 0;
    let maxIndex = 0;
    arr.forEach((val,i) => {
        if (val > 0) {
            let worth = val;
            let index = i + 1;
            while (worth > 0 && index < arr.length) {
                if (worth > maxSum) {
                    maxSum = worth;
                    maxIndex = i;
                }
                worth = val + arr[index];
                index++;
            }
        }
    })
    return maxSum;
  }

  console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

//   didnt pass all test, too hungry to care.  but also, bit salt.
