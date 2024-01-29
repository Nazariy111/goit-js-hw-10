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

    const delay = Number(e.currentTarget.elements.delay.value);
    const promiseStatus = e.currentTarget.elements.state.value;
    const promise = createPromise(delay, promiseStatus);

    promise
        .then((delay) => {
            iziToast.show({
                timeout: 5000,
                color: '#59A10D',
                messageColor: 'white',
                titleColor: '#FFFFFF',
                iconColor: '#FFFFFF',
                message: `✅ Fulfilled promise in ${delay}ms       `,
            });
        })
        .catch((delay) => {
            iziToast.show({
                timeout: 5000,
                color: '#d11804',
                messageColor: 'white',
                titleColor: '#FFFFFF',
                iconColor: '#FFFFFF',
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
