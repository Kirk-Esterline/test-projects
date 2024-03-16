let imgButtons = document.getElementsByClassName('gallery-image')
let heroImage = document.getElementById('heroImg')

Array.from(imgButtons).forEach((element) => {
    element.addEventListener('click', changeImage)
})

function changeImage() {
    let newImage = this.src
    heroImage.src=newImage
    document.getElementById('lure-item-number').innerText=heroImage.src
    document.getElementById('lure-notes').innerText='This is a test'
}