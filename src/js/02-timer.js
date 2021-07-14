import Swal from 'sweetalert2';

const refs = {
    timeSet: document.querySelector('#date-selector'),
    startBtn: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
};

let deltaTime = null;
let zeroTime = null;

refs.startBtn.disabled = true;

class Timer {
    countdownTime(set) {
        const currentTime = Date.now();
        const targetTime = Date.parse(set.target.value);

        deltaTime = targetTime - currentTime;

        if (deltaTime > 0) {
            refs.startBtn.disabled = false;
        }

        if (deltaTime < 0) {
            Swal.fire({
                icon: 'warning',
                title: 'No way!',
                text: 'Please choose a date in the future!',
              });
        }
    };
}

function startCountdown() {
    let timeValue = deltaTime

    const margin = setInterval(() => {
        if (timeValue > 999) {
            timeValue -= 1000;
    
          zeroTime = convertMs(timeValue);
    
          refs.days.textContent = zeroTime.days;
          refs.hours.textContent = zeroTime.hours;
          refs.minutes.textContent = zeroTime.minutes;
          refs.seconds.textContent = zeroTime.seconds;
        }
    
        if (timeValue < 1000) {
          clearInterval(margin);
        }
      }, 1000);
    } 

const timer = new Timer();

refs.timeSet.addEventListener('change', timer.countdownTime);
refs.startBtn.addEventListener('click', () => {
    startCountdown();
    refs.timeSet.disabled = true;
    refs.startBtn.disabled = true;
});

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = pad(Math.floor(ms / day));
    const hours = pad(Math.floor((ms % day) / hour));
    const minutes = pad(Math.floor(((ms % day) % hour) / minute));
    const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };

    function pad(value) {
        return String(value).padStart(2, '0');
      }
  }