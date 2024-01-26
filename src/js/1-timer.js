import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"

iziToast.settings({
    timeout: 3000, // default timeout
    resetOnHover: true,
    transitionIn: 'flipInX',
    transitionOut: 'flipOutX',
    position: 'topLeft', 
    });

const btn = document.querySelector("button");
const days = document.querySelector("[data-days]");
const hours = document.querySelector("[data-hours]");
const minutes = document.querySelector("[data-minutes]");
const seconds = document.querySelector("[data-seconds]");

let userSelectedDate;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        userSelectedDate = selectedDates[0];

        const nowDate = Date.now();

        if (userSelectedDate <= nowDate) {
            // window.alert("Please choose a date in the future");
            iziToast.error({
                title: 'Error',
                message: 'Please choose a date in the future',
            });
            btn.classList.remove("isActive");
            btn.removeEventListener("click", timerFunction);
        } else { 
            btn.classList.add("isActive");
            btn.addEventListener("click", timerFunction);
        };
    },
};

flatpickr("#datetime-picker", options);

function timerFunction() {
    btn.classList.remove("isActive");
    setInterval(() => {
        const nowDate = Date.now();
        const ms = userSelectedDate - nowDate;
        if (ms >= 0) { 
            const timeObj = convertMs(ms);
            if (timeObj.days < 10) { 
                days.textContent = addLeadingZero(timeObj.days);
            } else {
                days.textContent = timeObj.days;
            };
            hours.textContent = addLeadingZero(timeObj.hours);
            minutes.textContent = addLeadingZero(timeObj.minutes);
            seconds.textContent = addLeadingZero(timeObj.seconds);
        };

        

    }, 1000);
};

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
};

function addLeadingZero(value) {
    return value.toString().padStart(2, "0");
};

