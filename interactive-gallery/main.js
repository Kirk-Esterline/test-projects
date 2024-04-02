let imgButtons = document.getElementsByClassName('gallery-image')
let heroImage = document.getElementById('heroImg')


Array.from(imgButtons).forEach((element) => {
    element.addEventListener('click', changeImage)
})

function changeImage() {
    let newImage = this
    heroImage.src=newImage.src
    document.getElementById('lure-item-number').innerText=newImage.dataset.item
    document.getElementById('lure-notes').innerHTML=newImage.dataset.des
}

