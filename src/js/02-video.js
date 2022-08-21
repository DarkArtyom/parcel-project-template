import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

let itemFromStorage = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);
if (itemFromStorage) {
  player.setCurrentTime(itemFromStorage);
}

function onPlay(event) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(event.seconds)
  );
}
player.on('timeupdate', throttle(onPlay, 500));
// localStorage.clear();
