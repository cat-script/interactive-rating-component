const form = document.querySelector('form');
const userRated = document.querySelector('.user-rated');
const ratingState = document.querySelector('.rating-state');
const thankyouState = document.querySelector('.thankyou-state');

form.addEventListener(
  'submit',
  (e) => {
    const data = new FormData(form);
    let rate = '';
    for (const entry of data) {
      rate = ` ${entry[1]} `;
      console.log(`${entry[0]} = ${entry[1]}`);
    }
    if (rate) {
      userRated.textContent = rate;
      ratingState.classList.toggle('hidden');
      thankyouState.classList.toggle('hidden');
    }
    e.preventDefault();
  },
  false
);
