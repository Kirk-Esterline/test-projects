let imgButtons = Array.from(document.querySelectorAll('.gallery img'))
let heroImage = document.getElementById('heroImg')


imgButtons.forEach((element) => {
    element.addEventListener('click', changeImage)
})

function changeImage() {
    let newImage = this
    heroImage.src=newImage.src
    document.getElementById('lure-item-number').innerText=newImage.dataset.item
    document.getElementById('lure-notes').innerHTML=newImage.dataset.des
}

// Here is the final code that ended up working in WordPress

document.addEventListener('DOMContentLoaded', () => { // an event listener waiting for the DOM to be ready before attempting to added the event listeners to elements.
	let imgButtons = Array.from(document.querySelectorAll('.gallery-image-links img'))
	let heroImage = document.querySelector('.heroImage')
	let heroImageItemNumber = document.querySelector('.hero-image-item-number')
	
	imgButtons.forEach((element) => {
    	element.addEventListener('click', changeImage)
	})

	function changeImage() {
    	let newImage = this
    	heroImage.src = newImage.src
		heroImage.srcset = newImage.srcset
		heroImageItemNumber.style.setProperty('display', 'block')
		heroImageItemNumber.innerText = newImage.parentElement.querySelector('figcaption').innerText
		document.querySelector('figcaption').style.setProperty('display', 'none')
}
})