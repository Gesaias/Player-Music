
let musics = [{
    title: 'Like You Do',
    artist: 'Joji',
    src: './music/Joji - Like You Do.mp3',
    img: './assets/Joji Like You Do.jpeg'
},

{
    title: 'Slow Dancing In The Dark',
    artist: 'Joji',
    src: './music/Joji - SLOW DANCING IN THE DARK.mp3',
    img: './assets/joji.jpg'
},

{
    title: 'Playlist Acoustic',
    artist: 'The Neighbourhood',
    src: './music/The Neighbourhood - Acoustic Playlist.mp3',
    img: './assets/indie.jpg'
}]
let indexMusics = 0;
let pause = document.querySelector('.pause').style.display = 'none';
let music = document.querySelector('audio');
let durationMusic = document.querySelector('.end');
let image = document.querySelector('img');
let nameMusic = document.querySelector('.description h2');
let nameArtist = document.querySelector('.description i');

renderMusic(indexMusics);

// Events
document.querySelector('.play').addEventListener('click', playMusic);
document.querySelector('.pause').addEventListener('click', pauseMusic);
document.querySelector('.previous').addEventListener('click', () => {
    indexMusics--;
    if (indexMusics < musics.length) {
        indexMusics = 2;
    }
    renderMusic(indexMusics);
});
document.querySelector('.next').addEventListener('click', () => {
    indexMusics++;
    if (indexMusics > musics.length) {
        indexMusics = 0;
    }
    renderMusic(indexMusics);
});

music.addEventListener('timeupdate', refreshBar);

// Functions
function renderMusic(index) {

    music.setAttribute('src', musics[index].src);
    music.addEventListener('loadeddata', () => {
        nameMusic.textContent = musics[index].title;
        nameArtist.textContent = musics[index].artist;
        image.src = musics[index].img;
        durationMusic.textContent = secondsMinutes(Math.floor(music.duration));
    });

};

function playMusic() {

    music.play();

    document.querySelector('.pause').style.display = 'block';
    document.querySelector('.play').style.display = 'none';

};

function pauseMusic() {

    music.pause();

    document.querySelector('.pause').style.display = 'none';
    document.querySelector('.play').style.display = 'block';

};

function refreshBar() {

    let bar = document.querySelector('progress');
    let elapsedTime = document.querySelector('.start');

    bar.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%';

    elapsedTime.textContent = secondsMinutes(Math.floor(music.currentTime));

};

function secondsMinutes(seconds) {

    let timeMinutes = Math.floor(seconds / 60);
    let timeSeconds = seconds % 60;

    if (timeSeconds < 10) {
        timeSeconds = '0' + timeSeconds;
    };

    return timeMinutes + ':' + timeSeconds;
};