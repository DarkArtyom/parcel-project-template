import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

const onPlay = function (data) {
  console.log(data);
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
};
player.on('play', throttle(onPlay, 500));

const itemFromStorage = localStorage.getItem('videoplayer-current-time');
const parsedItem = JSON.parse(itemFromStorage);
//

function playMovie() {
  if (Object.keys(parsedItem).length != 0) {
    player
      .setCurrentTime(parsedItem.seconds)
      .then(function (seconds) {})
      .catch(function (error) {
        switch (error.name) {
          case 'RangeError':
            break;
          default:
            break;
        }
      });
  }
}
playMovie();
// localStorage.clear();
