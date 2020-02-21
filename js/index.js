var easyskate = ["Pop shove it", "Frontside pop shove it", "Front side 180", "Back side 180", "Kickflip", "Heelflip"];

document.getElementById("easy").addEventListener("click", function(){
	var randomNumber = Math.random();
	var randomNumberInRange = randomNumber*easyskate.length;
	var randomeIntegerInRange = Math.floor(randomNumberInRange);
	var trick1 = easyskate[randomeIntegerInRange];
	document.getElementById("quoteDisplay1").innerHTML = trick1;
	return
});


var mediumskate = ["Varial kickflip", "Varial heelflip", "Backside kickflip", "Frontside kickflip"];

document.getElementById("medium").addEventListener("click", function(){
	var randomNumber = Math.random();
	var randomNumberInRange = randomNumber*mediumskate.length;
	var randomIntegerInRange = Math.floor(randomNumberInRange);
	var trick2 = mediumskate[randomIntegerInRange];
	document.getElementById("quoteDisplay2").innerHTML = trick2;
	return
});

var hardskate = ["Impossible", "Dolphin flip", "360 flip", "Laser flip", "Frontside 360", "Backside 360"]

document.getElementById("hard").addEventListener("click", function(){
	var randomNumber = Math.random();
	var randomNumberInRange = randomNumber*hardskate.length;
	var randomeIntegerInRange = Math.floor(randomNumberInRange);
	var trick3 = hardskate[randomeIntegerInRange];
	document.getElementById("quoteDisplay3").innerHTML = trick3;
	return
});

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}