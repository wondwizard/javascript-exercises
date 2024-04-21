const removeFromArray = function(array, ...removeArgs) {
    for (remove of removeArgs) {
        while (array.indexOf(remove) != -1) {
            let itemToRemove = array.indexOf(remove) ;
            array.splice(itemToRemove, 1);
        }
    }
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
