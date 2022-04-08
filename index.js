// Code your solution in this file!
const headquarters = 42

function distanceFromHqInBlocks(someValue) {
        return Math.abs(someValue - headquarters)
}

function distanceFromHqInFeet(someValue) {
        return distanceFromHqInBlocks(someValue) * 264
}

function distanceTravelledInFeet(start, destination) {
    if (start < destination) {
    return (destination - start) *264
    }
    else{
        return (start - destination) *264
    }
}

function calculatesFarePrice(start, destination) {
    if (start < destination) {
        let distance = (destination - start) *264
            if (distance <= 400) {
                return 0
            }
            if (distance > 2500) {
                return "cannot travel that far"
            }
            if (distance > 2000) {
                return 25
            }
            else {
                return (distance -400) * 0.02
            }
        }
    else{
        let distance = (start - destination) *264
        if (distance <= 400) {
            return 0
         }
         if (distance > 2500) {
             return "cannot travel that far"
         }
         if (distance > 2000) {
            return 25
        }
         else {
            return (distance - 400) * 0.02
        }
}
}
