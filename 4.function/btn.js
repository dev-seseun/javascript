function openModal(text, btns) {
  $('.modal .modal-body').html(text);
  if (btns) {
    setBtnsHtml(btns);
  }
}

const setBtnsHtml = (btnsObjArray) => {
  const myDiv = document.querySelector('.modal .modal-footer');
  btnsObjArray.forEach((btn) => {
    const button = document.createElement('button');
    button.onclick = btn.onclick;
    button.innerHTML = btn.text;
    myDiv.appendChild(button);
  });
};
