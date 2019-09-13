


// first bonus


const uniquelang = users.reduce((listOfLang, user)=> {
    for (const lang of user.languages){
        if(listOfLang.indexOf(lang)===-1){
            listOfLang.push(lang);
        }
    }
    return listOfLang;
}, []);

console.log(uniquelang);

// second bonus

const everyOther = [23, 44, 60, 35, 67, 13, 7, 55, 99];

everyOther.filter( () => {
   return everyOther % 2 === 1;
});

// third problem

everyOther.reduce((total, amount) => {
    return total + amount;
});