function resizeFont() {
    const parent = document.querySelector('figure')
    const child = document.querySelector('figcaption')
    const parentWidth = parent.offsetWidth
    const newFontSize = parentWidth / 10
    parent.style.setProperty('--font-size', `${newFontSize}px`)
}

window.addEventListener('resize', resizeFont)
resizeFont()