import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

let onPlay = function (data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
};

let itemFromStorage = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);

if (itemFromStorage) {
  player.setCurrentTime(itemFromStorage);
}

player.on('play', throttle(onPlay, 500));

// localStorage.clear();
