'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Selecting
console.log(document.querySelector('.header'));
const allSections = document.querySelectorAll('.section')
console.log(allSections)

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons)

document.getElementsByClassName('btn')

//Creating
const message = document.createElement('p')
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved';
message.innerHTML = 'We use cookies for improved <button class="btn btn--close--cookie">Got it</button>'

//document.querySelector('.header').prepend(message)
document.querySelector('.header').append(message)

//document.querySelector('.header').before(message)
//document.querySelector('.header').after(message)

//Delete
document.querySelector('.btn--close--cookie').addEventListener('click', function () {
  //message.remove();
  message.parentElement.removeChild(message);
})

document.querySelector('.header').insertAdjacentElement('afterbegin', message)

function validateInput() {
  // Write your code here.
  const delighted = document.getElementById('delighted')
  const notDelighted = document.getElementById('not-delighted')
  const donate = document.getElementById('donate')
  const reason = document.getElementById('reason')
  const message = document.createElement('p')
  const error = document.getElementsByClassName("error-message")
  //rule 1:
  if (!(donate.checked && delighted.checked)) {
    message.innerHTML = 'RULE 1 BROKEN'
    error.append(message)
  }


}