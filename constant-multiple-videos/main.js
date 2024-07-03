
const videos = [
    { source: 'https://player.vimeo.com/video/774464176?h=f06b6a23e4?autoplay=1', runtime: 10000 },
    { source: 'https://www.youtube.com/embed/LqAutI6vNIY?si=sqnFvAWDRrglWiAk?autoplay=1', runtime: 10000 },
    { source: 'https://www.youtube.com/embed/LqAutI6vNIY?si=sqnFvAWDRrglWiAk?autoplay=1', runtime: 10000 },
    { source: 'https://player.vimeo.com/video/774480984?h=91651b8511', runtime: 10000 }
];

let currentIndex = 0;
const iframe = document.getElementById('videoPlayer');

while (currentIndex < videos.length ) {
    iframe.src = videos[currentIndex].source;
    console.log(currentIndex)
    setTimeout(playNextVideo, videos[currentIndex].runtime)
    currentIndex === videos.length-1 ? currentIndex = 0 : currentIndex++
}

function playNextVideo() {
    iframe.src = videos[currentIndex].source;
    console.log(currentIndex)
    currentIndex = (currentIndex + 1) % videos.length;
    console.log(currentIndex)

}

//Eventlistener to detect when the iframe content has loaded

// iframe.addEventListener('load', () => {
//     //Check video source
//     console.log('source checked')
//     if (iframe.src.includes('youtube.com')) {
//         const youtubePlayer = new YT.Player(iframe, {
//             events: {
//                 'onStateChange': (event) => {
//                     if (event.data === YT.PlayerState.ENDED) {
//                         console.log('ended')
//                         playNextVideo();
//                     }
//                 }
//             }
//         });
//     } else if (iframe.src.includes('vimeo.com')) {
//         const vimeoPlayer = new Vimeo.Player(iframe);
//         vimeoPlayer.on('ended', playNextVideo)
//     }
// });

playNextVideo();


//Attempt number 2, closer but no cigar. Im now thinking that the best option is a combination of the two.

// const videos = [
//     { type: 'vimeo', id: '774480984' },
//     { type: 'youtube', id: 'LqAutI6vNIY&t'},
//     { type: 'youtube', id: 'U-j2mQbO_Kg&t'}
// ];

// let currentIndex = 0;
// let youtubePlayer;
// let vimeoPlayer;

// function onYouTubeIframeAPIReady() {
//     youtubePlayer = new YT.Player('youtube-player', {
//         events: {
//             'onReady': onPlayerReady,
//             'onStateChange': onPlayerStateChange,
//             'onError': onPlayerError
//         }
//     });
// }

// function onPlayerReady(event) {
//     playNextVideo();
// }

// function onPlayerStateChange(event) {
//     if (event.data === YT.PlayerState.ENDED) {
//         playNextVideo();
//     }
// }

// function onPlayerError(event) {
//     console.error('YouTube Player Error:', event.data);
//     playNextVideo();
// }

// function playNextVideo() {
//     const video = videos[currentIndex];
//     if (video.type === 'youtube') {
//         youtubePlayer.loadVideoById(video.id);
//     } else if (video.type === 'vimeo') {
//         if (vimeoPlayer) {
//             vimeoPlayer.unload().then(() => {
//                 vimeoPlayer.loadVideo(video.id).then(() => {
//                     vimeoPlayer.play();
//                 });
//             });
//         } else {
//             vimeoPlayer = new Vimeo.Player('vimeo-player', {
//                 id: video.id
//             });
//             vimeoPlayer.on('ended', playNextVideo);
//             vimeoPlayer.play();
//         }
//     }
//     currentIndex = (currentIndex + 1) % videos.length;
// }



//Attempt number One - considering a fail at the moment.

// const videoArr = [
//     <iframe src="https://player.vimeo.com/video/774480267?h=e76fdfd7ef" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>,
//     <iframe width="560" height="315" src="https://www.youtube.com/embed/GYSk8SdByG8?si=q7K2WiT06sL7TF0c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
//     <iframe src="https://player.vimeo.com/video/774473294?h=36a66f2756" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
// ]

// const player = document.getElementById('videoPlayer')

// function playVideo() {
//     for (let i = 0; i <= videoArr.length; i++) {
//         console.log('loaded video')
//         player.appendChild = videoArr[i]
        
//     }
// }

// window.onload = playVideo