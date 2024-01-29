import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"


iziToast.settings({
    timeout: 3000, // default timeout
    resetOnHover: true,
    transitionIn: 'flipInX',
    transitionOut: 'flipOutX',
    position: 'topCenter', 
    color: '#EF4040',
    messageColor: '#FFFFFF',
    titleColor: '#FFFFFF',
    iconColor: '#FFFFFF',
    });


const startBtn = document.querySelector("button");
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
            iziToast.error({
                title: 'Error',
                message: 'Please choose a date in the future',
            });
            startBtn.classList.remove("isActive");
            startBtn.removeEventListener("click", timerFunction);
        } else { 
            startBtn.classList.add("isActive");
            startBtn.addEventListener("click", timerFunction);
        };
    },
};


flatpickr("#datetime-picker", options);


function timerFunction() {
    startBtn.classList.remove("isActive");

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
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);

    const hours = Math.floor((ms % day) / hour);

    const minutes = Math.floor(((ms % day) % hour) / minute);

    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
};


function addLeadingZero(value) {
    return value.toString().padStart(2, "0");
};

