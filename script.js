const submitButton = document.querySelector("button.submit")
const inputContainer = document.querySelector(".inputContainer")
const outputContainer = document.querySelector(".outputContainer")
const errorMessage = document.querySelector(".errorMessage")

submitButton.addEventListener("click", () => {
	if (currentRating === "") {
		errorMessage.classList.add("showError")
		return
	}
	errorMessage.classList.remove("showError")
	if (inputContainer.classList.contains("open")) {
		inputContainer.classList.remove("open")
		outputContainer.classList.add("open")
	} else {
		outputContainer.classList.remove("open")
		inputContainer.classList.add("open")
	}
})

errorMessage.addEventListener("animationend", () => {
	setTimeout(
		() => errorMessage.classList.remove("showError"),
		5000
	)
})

window.addEventListener("keydown", (e) => {
	if (e.key === "Escape") {
		if (outputContainer.classList.contains("open")) {
			outputContainer.classList.remove("open")
			inputContainer.classList.add("open")
		}
	}
})


let currentRating = ""
const ratingButtons = document.querySelectorAll("section.ratings > button")
const chosenRatingText = document.querySelector(".outputContainer > h2")

ratingButtons.forEach((ratingButton) => {
	ratingButton.addEventListener("click", () => {
		ratingButtons.forEach((button) => {
			button.classList.remove("checked")
		})
		ratingButton.classList.add("checked")
		currentRating = ratingButton.innerText
		chosenRatingText.innerText = `You selected ${currentRating} out of 5`
	})
})