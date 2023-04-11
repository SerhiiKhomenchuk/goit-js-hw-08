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
// let time;
    player.on('timeupdate', throttle((data => 
        localStorage.setItem(LOCALSTORAGE_KEY, data.seconds))
        
        // console.log(data.seconds);
,1000));





 player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY)).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});