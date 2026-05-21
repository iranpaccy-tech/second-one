const btnOpenModal = document.querySelector('.open-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal-btn');

btnOpenModal.addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

btnCloseModal.addEventListener('click', close);
overlay.addEventListener('click', close);

function close () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}