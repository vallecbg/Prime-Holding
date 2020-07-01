function sugarHigh(candies, threshold) {
    let currentCandies = []
    let minThreshold = 0
    for(let candyIndex = 0; candyIndex < candies.length; candyIndex++){
        if(checkCandyIsBelowThreshold(candies, candyIndex, threshold)){
            let tempThreshold = candies[candyIndex]
            let tempCurrentCandies = []
            tempCurrentCandies.push(candyIndex)
            for(let nextCandyIndex = candyIndex + 1; nextCandyIndex < candies.length; nextCandyIndex++){
                if(checkNextCandyIsBelowCurrentThreshold(candies, nextCandyIndex, tempThreshold, threshold)){
                    tempThreshold += candies[nextCandyIndex]
                    tempCurrentCandies.push(nextCandyIndex)
                } else { break }
            }
            if(checkTempLengthIsLongerOrEqualThanCurrent(tempCurrentCandies, currentCandies) && 
              (checkThresholdIsZero(minThreshold) || compareThreshold(minThreshold, tempThreshold))) {
                currentCandies = tempCurrentCandies.slice()
                minThreshold = tempThreshold
            }
        }
    }
    currentCandies = currentCandies.sort(sortArray)
    console.log(currentCandies)
}
function sortArray(a,b){
    return a - b;
}

function compareThreshold(current, temp){
    return current > temp
}

function checkThresholdIsZero(threshold){
    return threshold === 0
}

function checkTempLengthIsLongerOrEqualThanCurrent(temp, current){
    return temp.length >= current.length
}

function checkCandyIsBelowThreshold(candies, candyIndex, threshold){
    return candies[candyIndex] < threshold
}

function checkNextCandyIsBelowCurrentThreshold(candies, nextCandyIndex, tempThreshold, threshold) {
    return candies[nextCandyIndex] + tempThreshold < threshold
}

sugarHigh([33, 20, 12, 19, 29], 33) // Expected output: [2, 3]
sugarHigh([62, 67, 100], 8) // Expected output: []
sugarHigh([16, 39, 67, 16, 38, 71], 17) // Expected output: [0]
sugarHigh([16, 3, 14, 17, 11], 99) // Expected output: [0, 1, 2, 3, 4]