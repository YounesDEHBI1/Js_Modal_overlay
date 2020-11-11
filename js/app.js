// Select concerned elements
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

// listen for click events on buttons
modalBtn.addEventListener("click", function () {
    // Show modal
    modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function () {
    // Hide modal
    modal.classList.remove("open-modal");
})
