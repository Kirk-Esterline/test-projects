function resizeFont() {
    const parent = document.querySelector('figure')
    const child = document.querySelector('figcaption')
    const parentWidth = parent.offsetWidth
    const parentHeight = parent.offsetHeight
    const newFontSize = parentWidth / 10
    const newTextPadding = parentHeight / 50
    parent.style.setProperty('--font-size', `${newFontSize}px`)
    parent.style.setProperty('--padding-top', `${newTextPadding}px`)
}

window.addEventListener('resize', resizeFont)
resizeFont()