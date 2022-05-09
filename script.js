// EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers. 

const calcAvg = arr => {
    let total = 0;

    arr.forEach(element => {
        total += element;
    });

    const avg = total/arr.length; 
    console.log(avg);
    return avg;
};

//TESTS
calcAvg([1 , 4 , 7]);
calcAvg([10, 5]);
calcAvg([1.5, 3, 2.5, 1]);
