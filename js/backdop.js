(() => {
  const refs = {
    // openModalBtn: document.querySelector("[id='buy-modal-open']"),
    openBackdrop: document.querySelector('.mobile-menu-btn'),
    menuContainer: document.querySelector('.backdrop'),
  };

  refs.openBackdrop.addEventListener('click', toggleModal);
  //   refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menuContainer.classList.toggle('is-hidden');
  }
})();
