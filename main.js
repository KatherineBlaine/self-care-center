// Variables -

// buttons -

var receiveMessageButton = document.querySelector('#receive-message-button')
var viewSavedButton = document.querySelector('#view-saved-messages')
var homeButton = document.querySelector('#home-button')

// also inserting home and favorite message button below - total of 4 buttons

// main page sections -
var textBoxOne = document.querySelector('.textBox1')
var textBoxTwo = document.querySelector('.textBox2')
var mainPage = document.querySelector('#main-page')

// main page section 1 elements -
var affirmationRadio = document.querySelector('#affirmation-selector')
var mantraRadio = document.querySelector('#mantra-selector')

//main page section 2 elements -
var messageBox = document.querySelector('.message')
var message

// view saved messages section:
var savedMessageSection = document.querySelector('.view-saved-messages')
var favoriteMessages = document.querySelector('.saved-messages')
var savedMessages= [];

// Event Listeners -

// Displays random message when receive message button is clicked
receiveMessageButton.addEventListener('click', displayMessage)

// displays saved message page when view-saved messages button is clicked
viewSavedButton.addEventListener('click', showSavedMessages)

homeButton.addEventListener('click', function(){
    returnHome()})

// Event Handlers -

function displayMessage() {
    if (affirmationRadio.checked === true) {
        message = affirmations[getRandomIndex(affirmations)];
    } else if (mantraRadio.checked === true) {
        message = mantras[getRandomIndex(mantras)];
    } else {
        textBoxTwo.innerHTML = `<p>${'Please select a message option!'}</p>`
        return
    } textBoxTwo.innerHTML = `
    <section>
        <p>${message}</p>
        <button class='button-main' id='favorite-message-button'>Favorite Message</button>
    </section>`
        var favoriteButton = document.querySelector('#favorite-message-button')
        favoriteButton.addEventListener('click', function() {
            saveMessage(message)})
}

function saveMessage(message) {
    if (!savedMessages.includes(message))
    savedMessages.push(message)
    }


function returnHome() {
    hide(savedMessageSection)
    show(mainPage)
    hide(favoriteMessages)
}

function showSavedMessages() {
    show(savedMessageSection)
    hide(mainPage)
    displaySavedMessages()
    }

function displaySavedMessages() {
    favoriteMessages.innerHTML = '';
    for (var i = 0; i < savedMessages.length; i++) {
        favoriteMessages.innerHTML += `
        <section class ='message-box'>
            <article id='saved-message'>${savedMessages[i]}</article>
            <button id="remove-saved-message-button">X</button>
        </section>`
    } show(favoriteMessages)
    var deleteMessageButton = document.querySelector('#remove-saved-message-button')
    deleteMessageButton.addEventListener('click', function() {
    removeMessage(message)})
}

function removeMessage(messegeToDelete) {
    savedMessages.splice(savedMessages[savedMessages.indexOf(messegeToDelete)], 1)
    displaySavedMessages()}

// Misc. Functions -

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
}

function show(element) {
    element.classList.remove('hidden')
}

function hide(element) {
    element.classList.add('hidden')
}