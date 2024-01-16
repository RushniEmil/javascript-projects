'use strict';

// Initialising variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseMOdal = document.querySelector('.close-modal');
//Select all three show modal buttons
const btnsOpenModal = document.querySelectorAll('.show-modal');

//Function to close modal
const closeModel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
//Function to open modal
const openModal = function () {
  // To remove class hidden
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Event to open modal
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

//Event to close modal
btnCloseMOdal.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModel();
  }
});
