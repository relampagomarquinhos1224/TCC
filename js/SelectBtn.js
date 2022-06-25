const btn = document.getElementById('input-select');
const optionsBlock = document.getElementById('btn-options');
const body = document.querySelector('body');
const btnIcon = btn.querySelector('img');

function handleClick() {
  optionsBlock.classList.toggle('hide');
  if (btnIcon.getAttribute('src') == '../assets/images/seta-select.svg') {
    btnIcon.setAttribute('src', '../assets/images/reta-select.svg');
  } else {
    btnIcon.setAttribute('src', '../assets/images/seta-select.svg');
  }
}

btn.addEventListener('click', handleClick);


