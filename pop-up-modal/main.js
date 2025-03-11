//First iteration
// function resizeFont() {
//     const parent = document.querySelector('figure')
//     const parentWidth = parent.offsetWidth
//     const parentHeight = parent.offsetHeight
//     const newFontSize = parentWidth / 50
//     const newTextPadding = parentHeight / 50
//     parent.style.setProperty('--font-size', `${newFontSize}px`)
//     parent.style.setProperty('--padding-top', `${newTextPadding}px`)
// }

// window.addEventListener('resize', resizeFont)
// resizeFont()

// Second iteration
//     function resizeFont() {
//     let parent = Array.from(document.querySelectorAll('figure'))
//     const parentWidth = parent.offsetWidth
//     const parentHeight = parent.offsetHeight
//     const newFontSize = parentWidth / 50
//     const newTextPadding = parentHeight / 50
//     parent.map(image => image.style.setProperty('--font-size', `${newFontSize}px`))
//     parent.forEach(image => image.style.setProperty('--padding-top', `${newTextPadding}px`))
// }

// window.addEventListener('resize', resizeFont)
// resizeFont()

function resizeFont() {
    let figures = Array.from(document.querySelectorAll('figure'))
    figures.forEach(image => {
        const figureWidth = image.offsetWidth
        const figureHeight = image.offsetHeight
        const newFontSize = figureWidth / 15
        const newTextPadding = figureHeight / 50
        image.style.setProperty('--font-size', `${newFontSize}px`)
        image.style.setProperty('--padding-top', `${newTextPadding}px`)
    })
}

window.addEventListener('resize', resizeFont)
resizeFont()

// This is the code that Copilot gave that made me realize the error of my ways.

// function resizeFonts() {
//     const figures = document.querySelectorAll('figure')

//     figures.forEach(figure => {
//         const parentWidth = figure.offsetWidth
//         const parentHeight = figure.offsetHeight
//         const newFontSize = parentWidth / 50
//         const newTextPadding = parentHeight / 50
        
//         figure.style.setProperty('--font-size', `${newFontSize}px`)
//         figure.style.setProperty('--padding-top', `${newTextPadding}px`)
//     })
// }

// window.addEventListener('resize', resizeFonts)
// resizeFonts()


