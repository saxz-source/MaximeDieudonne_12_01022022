export const getExtremeNumbersInArray = (numberArray) => {
    numberArray.sort();
    return [numberArray[0], numberArray[numberArray.length - 1]];
};
