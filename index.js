//selectors
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const showModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

//event listener
showModalBtn.addEventListener("click", showModal);
closeModalBtn.addEventListener("click", closeModal);

//functions
function showModal () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

function closeModal (){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}