let sec = document.querySelector('.seconds');
let min = document.querySelector('.minutes');
let hour = document.querySelector('.hours');
let hourLabel = document.querySelector('#hours-label');
let minLabel = document.querySelector('#minutes-label');
let amOrPm = document.querySelector('#AM-label');
let dateLabel = document.querySelector('.date');
let themeBtn = document.querySelector('.theme-toogle');
let body = document.querySelector('body');

let date = new Date();

setInterval(() => {
  let date = new Date();
  let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let hours = date.getHours() % 12;
  // //   let seconds = 30;
  //   let minutes = 15;
  //   let hours = 10;
  sec.style.transform = `rotate(${seconds * 6 - 90}deg)`;
  min.style.transform = `rotate(${minutes * 6 - 90}deg)`;
  hour.style.transform = `rotate(${hours * 30 - 90}deg)`;
  hourLabel.innerText = hours;
  minLabel.innerText = formatizeTime(minutes);
  amOrPm.innerText = date.getHours() > 12 ? 'PM' : 'AM';
  dateLabel.innerText = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
}, 990);

themeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  if (body.classList.contains('dark-theme')) {
    themeBtn.innerText = 'claro';
  } else {
    themeBtn.innerText = 'oscuro';
  }
});

function formatizeTime(x) {
  if (x < 10) return '0' + x;
  return x;
}
