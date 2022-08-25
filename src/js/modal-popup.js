(() => {
  const refs = {
    openModalBtn: document.querySelectorAll("[data-open-popup]"),
    closeModalBtn: document.querySelector("[data-close-popup]"),
    modal: document.querySelector("[data-modal-popup]"),
  };

  refs.openModalBtn[0].addEventListener("click", openModal);
   refs.openModalBtn[1].addEventListener("click", openModal);
  refs.closeModalBtn.addEventListener("click", closeModal);
  refs.modal.addEventListener('click', onClickOnBackdropCloseModal);
 


  function openModal() {
    refs.modal.classList.toggle("is-hidden-popup");
    window.addEventListener('keydown', onPushEscCloseModal)
  }

  function closeModal() {
    refs.modal.classList.toggle("is-hidden-popup");
    window.removeEventListener('keydown', onPushEscCloseModal)
  }

  function onPushEscCloseModal(e) {
    const ESC_CODE = 'Escape'

    if (e.code === ESC_CODE) {
      closeModal()
    }
  }

  function onClickOnBackdropCloseModal(e) {    
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

})();