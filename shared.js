var backdrop = document.querySelector('.backdrop');
var planButtonSelect = document.querySelectorAll('.plan button');
var modal = document.querySelector('.modal');
var noSelect = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

for (var i = 0; i < planButtonSelect.length; i++) {
  planButtonSelect[i].addEventListener('click', function() {
    // modal.style.display = 'block'
    // backdrop.style.display = 'block'
    modal.classList.add('open')
    backdrop.classList.add('open')
  });
};

function closeModal() {
  // modal.style.display = 'none'
  // backdrop.style.display = 'none'
  if(modal) {
    modal.classList.remove('open')
  }
  backdrop.classList.remove('open')
}

backdrop.addEventListener('click', function() {
  closeModal();
  mobileNav.classList.remove('open')
})

// if (noSelect) {
  noSelect.addEventListener('click', closeModal())
// }

toggleButton.addEventListener('click', function() {
  mobileNav.classList.add('open')
  backdrop.classList.add('open')
})