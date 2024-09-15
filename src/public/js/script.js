document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('audioElement');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const seekBar = document.getElementById('seekBar');
    const volumeControl = document.getElementById('volumeControl');
    const currentTime = document.getElementById('currentTime');
    const duration = document.getElementById('duration');

    // Play/Pause button
    playPauseBtn.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            playPauseBtn.classList.remove('fa-play');
            playPauseBtn.classList.add('fa-pause');
        } else {
            audio.pause();
            playPauseBtn.classList.remove('fa-pause');
            playPauseBtn.classList.add('fa-play');
        }
    });


    // Update seek bar and current time
    audio.addEventListener('timeupdate', function () {
        const value = (audio.currentTime / audio.duration) * 100;
        seekBar.value = value;
        currentTime.textContent = formatTime(audio.currentTime);
        duration.textContent = formatTime(audio.duration);
    });

    // Seek bar change
    seekBar.addEventListener('input', function () {
        const time = (seekBar.value / 100) * audio.duration;
        audio.currentTime = time;
    });

    // Volume control
    volumeControl.addEventListener('input', function () {
        audio.volume = volumeControl.value / 100;
    });

    // Format time function
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
});