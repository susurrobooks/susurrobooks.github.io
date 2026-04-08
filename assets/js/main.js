// 경로 설정 (kr 폴더 안인지 루트인지 자동 감지)
var isKr = window.location.pathname.indexOf('/kr/') !== -1;
var base = isKr ? '/assets/html/' : 'assets/html/';
var headerFile = isKr ? base + 'header_kr.html' : base + 'header_en.html';
var footerFile = base + 'footer.html';

// HTML 파일 불러와서 삽입
function loadHTML(selector, file) {
  var el = document.querySelector(selector);
  if (!el) return;
  fetch(file)
    .then(function (res) { return res.text(); })
    .then(function (html) {
      el.innerHTML = html;
      // 현재 페이지 nav 링크에 current-page 클래스 추가
      var currentPath = window.location.pathname;
      el.querySelectorAll('.nav a').forEach(function (a) {
        if (a.getAttribute('href') === currentPath || currentPath.endsWith(a.getAttribute('href'))) {
          a.classList.add('current-page');
        }
      });
      // 드롭다운 이벤트 등록
      initDropdown();
    });
}

// 언어 드롭다운
function initDropdown() {
  var btn = document.querySelector('.lang-btn');
  var menu = document.querySelector('.lang-menu');
  if (btn && menu) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      menu.classList.toggle('open');
    });
    document.addEventListener('click', function () {
      menu.classList.remove('open');
    });
  }
}

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
  loadHTML('#header-wrap', headerFile);
  loadHTML('#footer-wrap', footerFile);
});
