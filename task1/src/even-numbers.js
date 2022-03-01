const evenNumbersInArray = (array) => {
    if (Array.isArray(array) && array.length !== 0) {
        let newArr = [];
        for (let el of array) {
            if (el % 2 === 0) {
                newArr.push(el);
            }
        }
        if (newArr.length === 0) {
            return "Passed array does not contain even numbers";
        } else return newArr;

    } else return "Passed argument is not an array or empty";

};

module.exports = evenNumbersInArray;

