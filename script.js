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