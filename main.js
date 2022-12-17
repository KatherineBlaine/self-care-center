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
// var messageBox = document.querySelector('.message')
var message

// view saved messages section:
var savedMessageSection = document.querySelector('.view-saved-messages')
var favoriteMessages = document.querySelector('.saved-messages')
var savedMessage = document.querySelector('#saved-message')
var savedMessages= [];
var messageBox = document.querySelector('.message-box')

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
    hide(viewSavedButton)
    displaySavedMessages()
    }

// function displaySavedMessages() {
//     favoriteMessages.innerHTML = '';
//     for (var i = 0; i < savedMessages.length; i++) {
//         favoriteMessages.innerHTML += `
//         <section class ='message-box'>
//             <article class='saved-message'>${savedMessages[i]}</article>
//             <button class="remove-saved-message-button">X</button>
//         </section>`
//         var savedMessage = document.querySelector('.saved-message')
//         var deleteMessageButton = document.querySelector('.remove-saved-message-button')
//         deleteMessageButton.addEventListener('click', function() {
//         removeMessage(savedMessage.innerText)})
//     } show(favoriteMessages)
// }

// function displaySavedMessages() {
//     favoriteMessages.innerHTML = '';
//     for (var i = 0; i < savedMessages.length; i++) {
//         favoriteMessages.innerHTML += `
//         <section class ='message-box'>
//             <article class='saved-message'>${savedMessages[i]}</article>
//             <button class="remove-saved-message-button">X</button>
//         </section>`
//         var removeMessageButtons = document.querySelectorAll('.remove-saved-message-button')
//         removeMessageButtons.forEach(element => {
//             element.addEventListener('click', function() {
//                 removeMessage(savedMessages[i])})
//         })
//     } show(favoriteMessages)
// }

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

// why is there not any event listeners for the buttons below???

function removeMessage(messegeToDelete) {
    savedMessages.splice(savedMessages[savedMessages.indexOf(messegeToDelete)], 1)
    displaySavedMessages()}

// function removeMessage(messageToDelete) {
//     console.log(event.target.parentNode)
//     console.log(messageToDelete[0].innerHTML)
// }
// find the corresponding text box
// event.target.parentNode

// find the inner text of that text box
// messageToDelete[0].innerHTML

// find the index position of that string value in the array
//splice that array value
    // savedMessages.splice(savedMessages[savedMessages.indexOf(messageToDelete)], 1)
    // displaySavedMessages()}

// function removeMessage(messageToDelete) {
//     console.log(messageToDelete)
//     savedMessages.splice(savedMessages[savedMessages.indexOf(messageToDelete)], 1)
//     displaySavedMessages()}

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