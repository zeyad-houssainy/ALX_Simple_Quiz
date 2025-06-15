function checkAnswer() {
    let correctAnswer  = 4
    // console.log("let's starts")
    const selectedAnswer = document.querySelector('input[name="quiz"]:checked')
    let userAnswer = selectedAnswer.value
    // console.log(selectedAnswer)

    if (userAnswer == correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done." 
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!" 
    }
}

const submitButton = document.getElementById("submit-answer")

if (submitButton) {
    submitButton.addEventListener("click", checkAnswer)
}