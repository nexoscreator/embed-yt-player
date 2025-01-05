export interface LazyYouTubePlayerOptions {
    videoId: string;
    thumbnailQuality?: 'default' | 'hqdefault' | 'mqdefault' | 'sddefault' | 'maxresdefault';
    playButtonSvg?: string;
}
export declare class LazyYouTubePlayer {
    private element;
    private options;
    constructor(element: HTMLElement, options: LazyYouTubePlayerOptions);
    private init;
    private loadThumbnail;
    private addPlayButton;
    private loadIframe;
}
