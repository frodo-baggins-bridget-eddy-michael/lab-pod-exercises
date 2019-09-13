
//Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or greater than the value 33.

/**Create New Promise*/

const compareToThirtyThree = (num) => {
    const promise = new Promise((resolve, reject) => {
        if(num > 33) {
            //promise successful
            resolve(num + " is greater than 33, success!")
        } else {
            //promise rejected
            reject(num + " is less than 33, error!")
        }
    });
    return promise
};
compareToThirtyThree(45)
    .then(result => console.log(result))
    .catch(error => console.log(error));

compareToThirtyThree(30)
    .then(result => console.log(result))
    .catch(error => console.log(error));



//Write two functions that use Promises that you can chain! The first function, makeAllCaps(), will take in an array of words and capitalize them, and then the second function, sortWords(), will sort the words in alphabetical order. If the array contains anything but strings, it should throw an error.

/**Test Arrays*/
const arrayOfNames = ['bridget', 'elzhi', 'ellis', 'dad'];
const sortArr = ['cucumber', 44, true];
/** All capitalized new promise*/
const makeAllCaps = arr => {
    return new Promise((resolve, reject) => {

        let capsArr = arr.map(name => {

            if(typeof name === 'string'){
                return name.toUpperCase()
            } else {
                reject('Error: Not all items in the array are strings!')
            }
        });
        resolve(capsArr)
    })
};

/** Sort words alphabetically*/
const sortWords = (arr) => {
    return new Promise((resolve, reject) => {
        if(arr) {
            arr.forEach((name) => {
                if(typeof name !== 'string'){
                    reject('Error: Not all names in the array are strings!')
                }
            });
            resolve(arr.sort());
        } else {
            reject('Error: Could not sort words')
        }
    })
};


makeAllCaps(arrayOfNames)
    .then(sortWords)
    .then((result) => console.log(result))
    .catch(error => console.log(error));

makeAllCaps(sortArr)
    .then(sortWords)
    .then((result) => console.log(result))
    .catch(error => console.log(error));




