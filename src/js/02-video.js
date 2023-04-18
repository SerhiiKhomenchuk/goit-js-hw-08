import Player from '@vimeo/player';
import { throttle } from 'lodash';

const LOCALSTORAGE_KEY = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

player.on('timeupdate', throttle((data => 
        
        localStorage.setItem(LOCALSTORAGE_KEY, data.seconds))
    , 1000));





player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY) || 0);