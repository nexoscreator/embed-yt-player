import { LazyYouTubePlayer } from './LazyYouTubePlayer.js';

export function initLazyYoutubePlayers(): void {
    const youtubeElements = document.querySelectorAll('.NexosYt');
    youtubeElements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        const videoId = htmlElement.dataset.embed;
        if (videoId) {
            new LazyYouTubePlayer(htmlElement, { videoId });
        }
    });
}

initLazyYoutubePlayers();