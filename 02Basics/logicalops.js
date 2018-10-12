
var isVerified = true

var isloggedin = true

var hasPaymentToken = true

var isUser = true

if (!isVerified && isloggedin && hasPaymentToken) {
    console.log("Greetings to verified user")
    console.log("Grant access to purchased courses")
}
else if (!isVerified || !isUser) {
    console.log("Greetings to user")
    console.log("Grant access to previews")
    
} else {
    console.log("Dai vetti mundam onu register pannu illa odi poidu")
}