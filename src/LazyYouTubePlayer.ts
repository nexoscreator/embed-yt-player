export interface LazyYouTubePlayerOptions {
  videoId: string;
  thumbnailQuality?: 'default' | 'hqdefault' | 'mqdefault' | 'sddefault' | 'maxresdefault';
  playButtonSvg?: string;
}

export class LazyYouTubePlayer {
  private element: HTMLElement;
  private options: LazyYouTubePlayerOptions;

  constructor(element: HTMLElement, options: LazyYouTubePlayerOptions) {
    this.element = element;
    this.options = {
      thumbnailQuality: 'hqdefault',
      ...options
    };
    this.init();
  }

  private init(): void {
    this.element.classList.add('NexYt-player');
    this.loadThumbnail();
    this.addPlayButton();
    this.element.addEventListener('click', () => this.loadIframe());
  }

  private loadThumbnail(): void {
    const thumbnailSrc = `https://img.youtube.com/vi/${this.options.videoId}/${this.options.thumbnailQuality}.jpg`;
    const thumbnail = new Image();
    thumbnail.src = thumbnailSrc;
    thumbnail.alt = 'YouTube video thumbnail';
    thumbnail.classList.add('NexYt-thumbnail');

    thumbnail.onload = () => {
      this.element.appendChild(thumbnail);
    };

    thumbnail.onerror = () => {
      console.error('Failed to load thumbnail image.');
    };
  }

  private addPlayButton(): void {
    const playButton = document.createElement('div');
    playButton.classList.add('NexYt-play-btn');
    playButton.setAttribute('role', 'button');
    playButton.setAttribute('aria-label', 'Play video');
    playButton.innerHTML = this.options.playButtonSvg || `
      <svg viewBox='0 0 213.7 213.7'>
        <polygon class='t' points='73.5,62.5 148.5,105.8 73.5,149.1'></polygon>
        <circle class='c' cx='106.8' cy='106.8' r='103.3'></circle>
      </svg>
    `;
    this.element.appendChild(playButton);
  }

  private loadIframe(): void {
    const spinner = document.createElement('div');
    spinner.classList.add('NexYt-spinner');
    this.element.innerHTML = '';
    this.element.appendChild(spinner);

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${this.options.videoId}?rel=0&showinfo=0&autoplay=1`;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.classList.add('NexYt-iframe');
    
    this.element.appendChild(iframe);
  }
}