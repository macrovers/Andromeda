
var marksobtained = 65

var passmark = 40

var totalmarks = 100

var percentile = (marksobtained / totalmarks) * 100


if (marksobtained < passmark) {

    console.log("FAIL - You haven't cleared the exam")
    
} else {
    
console.log("PASS - You have cleared the exam")

}

console.log("Your Mark is: " + marksobtained)
console.log("You have secured " + percentile + " percent in the examination")