const leapYears = function(myYear) {
    if (myYear % 4 === 0 && !(myYear % 100 === 0) || myYear % 400 ===0) {
            return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
