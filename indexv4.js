var easyskate = ["Pop shove it", "Frontside pop shove it", "Front side 180", "Back side 180", "Kickflip", "Heelflip"];

document.getElementById("easy").addEventListener("click", function(){
	var randomNumber = Math.random();
	console.log(randomNumber);
	var randomNumberInRange = randomNumber*easyskate.length;
	console.log(randomNumberInRange);
	var randomeIntegerInRange = Math.floor(randomNumberInRange);
	console.log(randomeIntegerInRange);
	var trick = easyskate[randomeIntegerInRange];
	console.log(trick);
	alert(trick);
});


var mediumskate = ["varial kickflip", "varial heelflip", "backside kickflip", "frontside kickflip"];

document.getElementById("medium").addEventListener("click", function(){
	var randomNumber = Math.random();
	console.log(randomNumber);
	var randomNumberInRange = randomNumber*mediumskate.length;
	console.log(randomNumberInRange);
	var randomIntegerInRange = Math.floor(randomNumberInRange);
	console.log(randomIntegerInRange);
	var trick = mediumskate[randomIntegerInRange];
	console.log(trick);
	alert(trick);
});

var hardskate = ["impossible", "dolphin flip", "360 flip", "laser flip", "frontside 360", "backside 360"]

document.getElementById("hard").addEventListener("click", function(){
	var randomNumber = Math.random();
	console.log(randomNumber);
	var randomNumberInRange = randomNumber*hardskate.length;
	console.log(randomNumberInRange);
	var randomeIntegerInRange = Math.floor(randomNumberInRange);
	console.log(randomeIntegerInRange);
	var trick = hardskate[randomeIntegerInRange];
	console.log(trick);
	alert(trick);
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