import { LazyYouTubePlayer } from './LazyYouTubePlayer.js';
export function initLazyYoutubePlayers() {
    const youtubeElements = document.querySelectorAll('.NexosYt');
    youtubeElements.forEach((element) => {
        const htmlElement = element;
        const videoId = htmlElement.dataset.embed;
        if (videoId) {
            new LazyYouTubePlayer(htmlElement, { videoId });
        }
    });
}
initLazyYoutubePlayers();
