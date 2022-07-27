(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-open-loc]"),
      closeModalBtn: document.querySelector("[data-close-loc]"),
      modal: document.querySelector("[data-loc]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden-loc");
    }
  })();