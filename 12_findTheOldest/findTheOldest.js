        // passing array of people to function
const findTheOldest =function(arrayPeople) {
// reduce will return one value after iterating through all items in array
    return arrayPeople.reduce((oldestPers,currPers) => { 
        // oldestPers and currPers do not have any initial value here, oldestPers will by default be the oldest
        // then we will compare each loop against current
        const oldestAge = getAge(oldestPers.yearOfBirth, oldestPers.yearOfDeath);
        const currentAge = getAge(currPers.yearOfBirth, currPers.yearOfDeath);
        return oldestAge < currentAge ? currPers :  oldestPers;
        })
    };

// this will calculate the age of the person
const getAge = function(yearOfBirth, yearOfDeath) {
    // if there is no year of death, the person is alvie and we'll make the year of death the current year
    if(!yearOfDeath) {
        yearOfDeath = new Date().getFullYear(); // get the current year
    }
    // calculate age - death year - birth year
    return yearOfDeath-yearOfBirth;
}
                              

// Do not edit below this line
module.exports = findTheOldest;
