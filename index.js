// Code your solution in this file!

const returnFirstTwoDrivers = function(array) {
    let newArray = [array[0], array[1]]
    return newArray
}

const returnLastTwoDrivers = function(array) {
    let newArray = [array.slice(-2, -1)[0], array.slice(-1)[0]]

    return newArray
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(int) {
    let multiplier = int
    return function(fare) {
        fare = fare * multiplier
        return fare
    }
}


const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)


function selectDifferentDrivers(array, func) {
    return func(array)
}