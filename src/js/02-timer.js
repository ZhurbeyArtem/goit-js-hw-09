import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const d = document.querySelector('span[data-days]');
const h = document.querySelector('span[data-hours]');
const m = document.querySelector('span[data-minutes]');
const s = document.querySelector('span[data-seconds]');

const btn = document.querySelector('button');
btn.disabled = true;
btn.addEventListener('click', start);
let selectedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    // tyt nad оброляти дату обрану користувачем
    if (selectedDates[0] < new Date()) {
      Notify.failure('Please choose a date in the future');
      btn.disabled = true;
    } else {
      btn.disabled = false;
      selectedDate = selectedDates[0];
    }
  },
};

flatpickr('#datetime-picker', options);

function start() {
  btn.disabled = true;
  setInterval(() => {
    const hourLefts = convertMs(selectedDate.getTime() - new Date().getTime());
    const { days, hours, minutes, seconds } = addLeadingZero(hourLefts);

    d.textContent = days;
    h.textContent = hours;
    m.textContent = minutes;
    s.textContent = seconds;
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);

  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  const i = '1';
  for (let key in value) value[key] = value[key].toString().padStart(2, '0');
  return value;
}
