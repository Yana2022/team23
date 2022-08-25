(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-open-loc]"),
      closeModalBtn: document.querySelector("[data-close-loc]"),
      modal: document.querySelector("[data-loc]"),
    };
  
    refs.openModalBtn.addEventListener("click", openModalLocation);
  refs.closeModalBtn.addEventListener("click", closeModalLocation);
  refs.modal.addEventListener('click', onClickCloseModalLocation)
  
    function openModalLocation() {
      refs.modal.classList.toggle("is-hidden-loc");
      window.addEventListener('keydown', onEscCloseModalLocation)
  }

  function closeModalLocation() {
    refs.modal.classList.toggle("is-hidden-loc");
    window.removeEventListener('keydown', onEscCloseModalLocation)
  }

  function onEscCloseModalLocation(e) {
    const ESC_CODE_MODAL = 'Escape';
    
    if (e.code === ESC_CODE_MODAL) {
      closeModalLocation()
    }
  }

  function onClickCloseModalLocation(e) {
    if (e.target === e.currentTarget) {
       closeModalLocation()
    }
  }
  

  })();