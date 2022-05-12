// EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers. 

const calcAvg = arr => {
    let total = 0;

    arr.forEach(element => {
        total += element;
    });

    console.log(total/arr.length);
};

//TESTS
calcAvg([1 , 4 , 7]);
calcAvg([10, 5]);
calcAvg([1.5, 3, 2.5, 1]);



//MEDIUM

const findTarget = (arr, target) => {
    console.log(arr.indexOf(target));
}

//TESTS
findTarget([4,5,6,7,0,1,2], 0);
findTarget([4,5,6,7,0,1,2], 3);



//HARD - THIS ACTIVITY CAN BE FOUND IN THE INDEX.HTML FILE



//VERY HARD

const fewestNum = (coins, amount) => {

    const table = Array(amount + 1);
    table.fill(amount + 1);
    table[0] = 0;
  

    
    for (let i = 1; i <= amount; i++) {
      for (let j = 0; j < coins.length; j++) {
        if (coins[j] <= i) {
          table[i] = Math.min(table[i], table[i - coins[j]] + 1);
        }
      }
    }

    if (table[amount] > amount) {
        return -1;
    } else {
        return table[amount];
    }
}

//TESTS
console.log(fewestNum([1, 2, 5], 11));
console.log(fewestNum([2], 3));