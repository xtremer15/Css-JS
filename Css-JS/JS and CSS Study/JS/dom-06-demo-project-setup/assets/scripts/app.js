const addMovieModal = document.getElementById("add-modal")
const startAddMovieButton = document.querySelector("header button")
const backDrop = document.getElementById("backdrop")
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive")
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling
const userInputs = addMovieModal.querySelectorAll("input")
const entryTextSection = document.getElementById("entry-text")
const movies = []
// const userInputs = addMovieModal.querySelectorAll("input") ->HTML Colectie , este live in momentul in care isi face update la nivel de colectie
// const userInputs2 = addMovieModal.getElementsByTagName("input") -> NODELIST este statica la nivel de colectie daca inseram 1 element 

const toggleMovieModalBackdrop = () => {
    backDrop.classList.toggle('visible')
}

const backDropClickHandler = () => {
    toggleMovieModal()
}

const cancelAddMovie = () => {
    toggleMovieModal()
    clearMovieInputFields()
}

const clearMovieInputFields = () => {
    for (const userInput of userInputs) {
        userInput.value = "";
    }
}

const updateUI = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = "block"
    } else {
        entryTextSection.style.display = "none"
    }
}

const renderNewElementMovie = (title, imgUrl, rating) => {
    const newRedredELement = document.createElement("li")
    newRedredELement.className = "movie-element"
    newRedredELement.innerHTML =`
    <div class="movie-element__image">
        <img src="${imgUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}/5stars</p>
    </div>
    `
    const ul = document.getElementById("movie-list")
    ul.appendChild(newRedredELement)
}

const addMovieHandler = () => {
    const titleValue = userInputs[0].value
    const imageUrlValue = userInputs[1].value
    const ratingValue = userInputs[2].value

    if (titleValue.trim() === "" || imageUrlValue.trim() === "" || ratingValue.trim() === "" || ratingValue < 1 || ratingValue > 5) {
        alert("Enter a valid value for each field")
        return
    }

    const newMovie = {
        title: titleValue,
        img: imageUrlValue,
        rating: ratingValue
    }

    movies.push(newMovie)
    toggleMovieModal()
    clearMovieInputFields()
    renderNewElementMovie(newMovie.title, newMovie.img, newMovie.rating)
    updateUI()
}

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleMovieModalBackdrop();
}



startAddMovieButton.addEventListener('click', toggleMovieModal)
backDrop.addEventListener('click', backDropClickHandler)
cancelAddMovieButton.addEventListener('click', cancelAddMovie)
confirmAddMovieButton.addEventListener('click', addMovieHandler)