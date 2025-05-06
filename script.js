// 스크롤 시 헤더 배경 변경
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.style.backgroundColor = '#f1f1f1';
  } else {
    header.style.backgroundColor = '#fff';
  }
});