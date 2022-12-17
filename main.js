var receiveMessageButton = document.querySelector('#receive-message-button')
var viewSavedButton = document.querySelector('#view-saved-messages')
var homeButton = document.querySelector('#home-button')

var textBoxOne = document.querySelector('.textBox1')
var textBoxTwo = document.querySelector('.textBox2')
var mainPage = document.querySelector('#main-page')

var affirmationRadio = document.querySelector('#affirmation-selector')
var mantraRadio = document.querySelector('#mantra-selector')

var message

var savedMessageSection = document.querySelector('.view-saved-messages')
var favoriteMessages = document.querySelector('.saved-messages')
var savedMessage = document.querySelector('#saved-message')
var savedMessages= [];
var messageBox = document.querySelector('.message-box')


receiveMessageButton.addEventListener('click', displayMessage)

viewSavedButton.addEventListener('click', showSavedMessages)

homeButton.addEventListener('click', function(){
    returnHome()})

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
    hide(viewSavedButton)
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
        var deleteMessageButton = document.querySelector('#remove-saved-message-button')
        deleteMessageButton.addEventListener('click', function() {
        removeMessage(message)})
    } show(favoriteMessages)
}

function removeMessage(messegeToDelete) {
    savedMessages.splice(savedMessages[savedMessages.indexOf(messegeToDelete)], 1)
    displaySavedMessages()}


function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
}

function show(element) {
    element.classList.remove('hidden')
}

function hide(element) {
    element.classList.add('hidden')
}