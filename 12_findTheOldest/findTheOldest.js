const findTheOldest = function (array) {
    return array.reduce((oldest, currentPerson) => {
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
      const currentAge = getAge(
        currentPerson.yearOfBirth,
        currentPerson.yearOfDeath
      );
      return oldestAge < currentAge ? currentPerson : oldest;
    });
  };
  
  const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };





/*const findTheOldest = function(array) {
    if (!array.yearOfDeath) {
        array.yearOfDeath = new Date().getFullYear();
    }

    const oldest = array.slice().sort(
        
        (p1, p2) => ((p1.yearOfDeath - p1.yearOfBirth) < (p2.yearOfDeath - p2.yearOfBirth)) ? 1
        : ((p1.yearOfDeath - p1.yearOfBirth) > (p2.yearOfDeath - p2.yearOfBirth)) ? -1 : 0);
    
    return oldest[0];  
};
*/
// Do not edit below this line
module.exports = findTheOldest;
