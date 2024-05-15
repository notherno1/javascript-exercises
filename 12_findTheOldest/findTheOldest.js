const findTheOldest = function(people) {
    function age(person) {
        let birth = person.yearOfBirth;
        let deathOrToday = 0;
        if(typeof person.yearOfDeath === 'undefined'){
            deathOrToday = new Date().getFullYear();
        } else {
            deathOrToday = person.yearOfDeath; 
        }
        return parseInt(deathOrToday) - parseInt(birth);
    }

    return people.sort(
        (firstPerson,secondPerson) => {
            return Math.sign(-age(firstPerson)+age(secondPerson));
        }
    )[0];


};

// Do not edit below this line
module.exports = findTheOldest;
