// let containerCarousel = document.querySelector('.carousel-container');
// let images = ['images/img-1.jpg', 'images/img-2.jpg', 'images/img-3.jpg'];
// let idx = 0;

// containerCarousel.style.backgroundImage = `url('${images[idx]}')`;
// containerCarousel.style.backgroundPosition = 'center';
// containerCarousel.style.backgroundRepeat = 'no-repeat';
// containerCarousel.style.backgroundSize = 'cover';

// const time = setInterval(() => {
//     if (idx == images.length - 1) {
//         idx -= 2;
//         containerCarousel.style.backgroundImage = `url('${images[idx]}')`;
//     } else {
//         idx += 1;
//         containerCarousel.style.transition = '4s';
//         containerCarousel.style.transform = '(-50px, 0)';
//         containerCarousel.style.backgroundImage = `url('${images[idx]}')`;
//     }
// }, 5000);

let arr = [5, 5, 5, 5, 5]; // 1+3+5+7 | 3+5+7+9

let minSum = 0;
let maxSum = 0;

let min = arr[0];
let max = 0;

// Check if the array have same numbers
const allEqual = arr => arr.every(val => val === arr[0]);
const result = allEqual(arr)

if (!result) {
    // Find the minimum and maximum number
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }

        if (arr[i] > max) {
            max = arr[i];
        }
    }

    let minArr = arr.filter((num) => num != max);
    let maxArr = arr.filter(num => num != min);

    minSum = addSum(minArr);
    maxSum = addSum(maxArr);

    console.log(minSum, maxSum);    

} else {
    for (let i = 0; i < arr.length - 1; i++) {
        minSum += arr[i];
        maxSum += arr[i];
    }
    console.log(minSum, maxSum); 
}

function addSum(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum; 
}