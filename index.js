// Write your solution in this file!
const driver = {name: "Lucy", address: "100 Main St"}
const returnDriver = Object.assign(driver);

// updateDriverWithKeyAndValue()- this function should take in three arguments: a driver Object, a key and a value. 
// This function should not mutate the driver and should return a new driver that has an updated value for the key passed in.
function updateDriverWithKeyAndValue(returnDriver, key, value) {
    const newObj = {...returnDriver};
    newObj[key] = value;
    return newObj;
}
const newDriver = updateDriverWithKeyAndValue(returnDriver, 'name', "Lennon");

// destructivelyUpdateDriverWithKeyAndValue() - this function should work the same as updateDriverWithKeyAndValue() 
// but it should mutate the driver parameter passed in.
function destructivelyUpdateDriverWithKeyAndValue(returnDriver, key, value) {
    returnDriver[key] = value;
    return returnDriver;
}
const oldDriver = destructivelyUpdateDriverWithKeyAndValue(returnDriver, 'name', 'Stephan');

// deleteFromDriverByKey() - this function should take in a driver Object and a key. 
// It should delete the key/value pair for the key that was passed in from the driver Object. 
// This should all not actually mutate the driver passed in.
function deleteFromDriverByKey(returnDriver, key) {
        const driverWithoutKey = Object.assign({}, returnDriver);
        delete driverWithoutKey[key];
        return driverWithoutKey;
}
const removeKeyDriver = deleteFromDriverByKey(returnDriver, 'address');


// destructivelyDeleteFromDriverByKey() - this function should work the same as deleteFromDriverByKey() 
// but it should mutate the driver passed in. 
// Be sure to consider whether and how using dot notation vs. bracket notation might affect your solution.
function destructivelyDeleteFromDriverByKey(returnDriver, key) {
    delete returnDriver[key];
    return returnDriver;
}
const deleteDriver = destructivelyUpdateDriverWithKeyAndValue(returnDriver, 'address');