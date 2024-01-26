import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

iziToast.settings({
    resetOnHover: true,
    transitionIn: 'flipInX',
    transitionOut: 'flipOutX',
    position: 'topCenter', 
});

const form = document.querySelector(".form");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const delay = e.currentTarget.elements.delay.value;
    const promiseStatus = e.currentTarget.elements.state.value;
    const promise = createPromise(delay, promiseStatus);

    promise
        .then((delay) => {
            iziToast.show({
                timeout: 5000,
                color: 'green',
                messageColor: 'white',
                message: `✅ Fulfilled promise in ${delay}ms       `,
            });
        })
        .catch((delay) => {
            iziToast.error({
                timeout: 5000,
                color: 'red',
                messageColor: 'white',
                message: `❌ Rejected promise in ${delay}ms        `,
            });
        });
    
    form.reset();
});

function createPromise(delay, promiseStatus) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (promiseStatus === "fulfilled") {
                resolve(delay);
            } else {
                reject(delay);
            };
        }, delay);
    });
    
    return promise;
};
