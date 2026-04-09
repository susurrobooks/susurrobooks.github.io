// 샘플 장르 데이터
// images 배열에 실제 스크린샷 파일명을 추가하면 됩니다
// e.g. images: ['sample-nonfiction-01.jpg', 'sample-nonfiction-02.jpg', ...]
var samplesData = [
  {
    genre: 'nonfiction',
    label: 'Nonfiction',
    cover: 'assets/images/16-soup-counseling.jpg',
    images: []
  },
  {
    genre: 'fiction',
    label: 'Fiction & Essay',
    cover: 'assets/images/01-mom-raised-me.jpg',
    images: []
  },
  {
    genre: 'poetry',
    label: 'Poetry & Drama',
    cover: 'assets/images/02-seoul-innovation-report.jpg',
    images: []
  },
  {
    genre: 'image',
    label: 'Image-heavy',
    cover: 'assets/images/03-national-park-casebook.jpg',
    images: []
  }
];

var ipadCur = null, ipadPg = 0;
var mobileCur = null, mobilePg = 0;

// 탭 전환
function switchPortfolioTab(id, el) {
  document.querySelectorAll('.portfolio-tab').forEach(function(t) { t.classList.remove('active'); });
  document.querySelectorAll('.portfolio-panel').forEach(function(p) { p.classList.remove('active'); });
  el.classList.add('active');
  document.getElementById('ptab-' + id).classList.add('active');
}

// 장르 카드 렌더링 (데스크탑/모바일 공용)
function renderSampleCards(gridId, clickFn) {
  var grid = document.getElementById(gridId);
  if (!grid) return;
  samplesData.forEach(function(s) {
    var div = document.createElement('div');
    div.className = 'sample-card';
    div.setAttribute('data-genre', s.genre);
    div.innerHTML = s.cover ? '<img src="' + s.cover + '" alt="' + s.label + '">' : '';
    div.addEventListener('click', function() {
      clickFn(s.genre);
    });
    grid.appendChild(div);
  });
}

// ipad 뷰어
function ipadOpenGenre(genre) {
  ipadCur = genre;
  ipadPg = 0;
  document.getElementById('ipad-shelf').style.display = 'none';
  document.getElementById('ipad-viewer').style.display = 'flex';
  ipadUpdate();
}
function ipadBack() {
  document.getElementById('ipad-shelf').style.display = 'block';
  document.getElementById('ipad-viewer').style.display = 'none';
  ipadCur = null;
}
function ipadPrev() {
  if (!ipadCur) return;
  var imgs = getSampleImages(ipadCur);
  ipadPg = (ipadPg - 1 + imgs.length) % imgs.length;
  ipadUpdate();
}
function ipadNext() {
  if (!ipadCur) return;
  var imgs = getSampleImages(ipadCur);
  ipadPg = (ipadPg + 1) % imgs.length;
  ipadUpdate();
}
function ipadUpdate() {
  var s = getSampleByGenre(ipadCur);
  var imgs = getSampleImages(ipadCur);
  document.getElementById('ipad-genre').textContent = s.label;
  document.getElementById('ipad-page').textContent = (ipadPg + 1) + ' / ' + imgs.length;
  var imgEl = document.getElementById('ipad-img').querySelector('img');
  if (imgs.length > 0) {
    if (!imgEl) {
      imgEl = document.createElement('img');
      document.getElementById('ipad-img').appendChild(imgEl);
    }
    imgEl.src = imgs[ipadPg];
    imgEl.alt = s.label + ' page ' + (ipadPg + 1);
  } else if (imgEl) {
    imgEl.remove();
  }
}

// mobile 뷰어
function mobileOpenGenre(genre) {
  mobileCur = genre;
  mobilePg = 0;
  document.getElementById('sample-grid-mobile').style.display = 'none';
  document.getElementById('mobile-viewer').style.display = 'flex';
  mobileUpdate();
}
function mobileBack() {
  document.getElementById('sample-grid-mobile').style.display = 'flex';
  document.getElementById('mobile-viewer').style.display = 'none';
  mobileCur = null;
}
function mobilePrev() {
  if (!mobileCur) return;
  var imgs = getSampleImages(mobileCur);
  mobilePg = (mobilePg - 1 + imgs.length) % imgs.length;
  mobileUpdate();
}
function mobileNext() {
  if (!mobileCur) return;
  var imgs = getSampleImages(mobileCur);
  mobilePg = (mobilePg + 1) % imgs.length;
  mobileUpdate();
}
function mobileUpdate() {
  var s = getSampleByGenre(mobileCur);
  var imgs = getSampleImages(mobileCur);
  document.getElementById('mobile-genre').textContent = s.label;
  document.getElementById('mobile-page').textContent = (mobilePg + 1) + ' / ' + imgs.length;
  var img = document.getElementById('mobile-img');
  img.innerHTML = imgs.length > 0
    ? '<img src="' + imgs[mobilePg] + '" alt="' + s.label + ' page ' + (mobilePg + 1) + '">'
    : '';
}

// 헬퍼
function getSampleByGenre(genre) {
  return samplesData.filter(function(s) { return s.genre === genre; })[0];
}
function getSampleImages(genre) {
  var s = getSampleByGenre(genre);
  return s ? s.images : [];
}

// 초기화
document.addEventListener('DOMContentLoaded', function() {
  renderSampleCards('sample-grid-desktop', ipadOpenGenre);
  renderSampleCards('sample-grid-mobile', mobileOpenGenre);
});
