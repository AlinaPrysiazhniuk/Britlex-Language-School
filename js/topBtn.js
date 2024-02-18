const topBtn = document.getElementById('myBtn');
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = 'block';
    topBtn.addEventListener('click', topFunction);
  } else {
    topBtn.style.display = 'none';
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}
