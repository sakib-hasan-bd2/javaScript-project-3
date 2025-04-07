let openbtn = document.querySelector('.openbtn');
let modal = document.querySelector('.modal');
let closebtn = document.querySelector('.closebtn');

openbtn.addEventListener('click', function () {
  modal.style.top = '0';
  openbtn.style.display = 'none';
});

closebtn.addEventListener('click', function () {
  modal.style.top = '-50%';
  openbtn.style.display = 'block';
})