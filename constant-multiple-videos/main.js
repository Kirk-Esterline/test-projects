const videoArr = [
    <iframe src="https://player.vimeo.com/video/774480267?h=e76fdfd7ef" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>,
    <iframe width="560" height="315" src="https://www.youtube.com/embed/GYSk8SdByG8?si=q7K2WiT06sL7TF0c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
    <iframe src="https://player.vimeo.com/video/774473294?h=36a66f2756" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
]

const player = document.getElementById('videoPlayer')

function playVideo() {
    for (let i = 0; i <= videoArr.length; i++) {
        player.innerHTML = videoArr[i]
    }
}

window.onload = playVideo