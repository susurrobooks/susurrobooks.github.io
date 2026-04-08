// 경로 설정 (kr 폴더 안인지 루트인지 자동 감지)
var isKr = window.location.pathname.indexOf('/kr/') !== -1;
var base = '/assets/html/';
var headerFile = isKr ? base + 'header_kr.html' : base + 'header_en.html';
var footerFile = base + 'footer.html';

// HTML 파일 불러와서 삽입
function loadHTML(targetEl, file) {
  fetch(file)
    .then(function (res) { return res.text(); })
    .then(function (html) {
      var tmp = document.createElement('div');
      tmp.innerHTML = html;
      targetEl.parentNode.insertBefore(tmp.firstElementChild, targetEl);
      targetEl.parentNode.removeChild(targetEl);
      // 현재 페이지 nav 링크에 current-page 클래스 추가
      var currentPath = window.location.pathname;
      document.querySelectorAll('.nav a').forEach(function (a) {
         if (a.closest('.lang-menu')) return;
        if (currentPath.endsWith(a.getAttribute('href'))) {
          a.classList.add('current-page');
        }
      });
    });
}

// 언어 드롭다운 (document에 이벤트 위임)
document.addEventListener('click', function (e) {
  var btn = e.target.closest('.lang-btn');
  var menu = document.querySelector('.lang-menu');
  if (btn && menu) {
    e.stopPropagation();
    menu.classList.toggle('open');
    return;
  }
  if (menu) menu.classList.remove('open');
});

// 샘플 탭 전환
function switchTab(id, el) {
  var service = el.closest('.sample-tabs');
  service.querySelectorAll('.tab-btn').forEach(function (t) { t.classList.remove('active'); });
  service.querySelectorAll('.tab-panel').forEach(function (p) { p.classList.remove('active'); });
  el.classList.add('active');
  document.getElementById('panel-' + id).classList.add('active');
}

// 실행
document.addEventListener('DOMContentLoaded', function () {
  var headerWrap = document.getElementById('header-wrap');
  var footerWrap = document.getElementById('footer-wrap');
  if (headerWrap) loadHTML(headerWrap, headerFile);
  if (footerWrap) loadHTML(footerWrap, footerFile);
});
