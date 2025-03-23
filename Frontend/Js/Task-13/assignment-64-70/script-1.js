
function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        zName = zName.split(' ');
        return `${zName[0]} ${zName[1][0].toUpperCase()}.`;
    }
    function ageWithMessage(zAge) {
        zAge = parseInt(zAge);
        return `Your Age Is ${zAge}`
    }
    function countryTwoLetters(zCountry) {
        return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`
    // Or  return `You Live In ${zCountry[0].toUpperCase()}${zCountry[1].toUpperCase()}`;

    }
    function fullDetails() {
        return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
    }

    return fullDetails(); 
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt")); // Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria")); // Hello Ahmed A., Your Age Is 32, You Live In SY


