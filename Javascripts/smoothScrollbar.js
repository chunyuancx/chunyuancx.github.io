import Scrollbar from './smooth-scrollbar';

var options = {
    'damping': 0.08,
    'alwaysShowTracks': true
}

Scrollbar.init(document.querySelector('#my-scrollbar'), options);