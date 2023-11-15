import { Notify } from 'notiflix/build/notiflix-notify-aio';

const firstDelay = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');
const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  let count = +firstDelay.value;
  for (let i = 1; i <= amount.value; i++) {
    createPromise(i, count).then(res => Notify.success(res)).catch(err => Notify.failure(err))
    count += +step.value;
  }
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(
        `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      } else {
        reject(
         `❌ Rejected promise ${position} in ${delay}ms`
        );
      }
    }, delay);
  });

  return promise;
}
