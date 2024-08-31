let popupContainer = document.getElementById('popup-container');
let popup = document.getElementById('popup');

function showExperience() {
    let message = 'show experiece';
    showPopup(message);
}

function showEducation() {
    let message = 'show education';
    showPopup(message);
}

function showVolunteer() {
    let message = 'show Volunteer';
    showPopup(message);
}

function showPopup(message) {
    popupContainer.innerHTML = message;

    if (popup.classList.contains('hidden')) {
        popup.classList.remove('hidden');
    } else {
        popup.classList.add('hidden');
    }
}