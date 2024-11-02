const dialog = document.querySelector("#dialog");
const opener = document.querySelector("#open-dialog");
const close = document.querySelector("#dialog .close")

opener.addEventListener('click', () => {
  dialog.showModal();
})


close.addEventListener("click", () =>{
 dialog.close();
})

dialog.addEventListener("click", (event) => {
 console.log(event.target);
 if( event.target === dialog)
 dialog.close();
})
 