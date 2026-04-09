var books = [
  { file: '22-community',                    title: '커뮤니티에 입장하셨습니다', subtitle: '각자의 현실 너머, 서로를 잇는 정치를 향하여', author: '권성민',                                                                          publisher: '돌고래' },
  { file: '21-turtle-time',                  title: '거북의 시간',              subtitle: '망가진 세상을 복원하는 느림과 영원에 관하여',  author: '사이 몽고메리 지음, 맷 패터슨 그림',                                           translator: '조은영',                          publisher: '돌고래' },
  { file: '20-womens-dictionary-of-symbols-2', title: '여성 상징 사전 2',       subtitle: '신적인 존재와 의례',                           author: '바버라 G. 워커',                                                              translator: '여성 상징 번역 모임',             publisher: '돌고래' },
  { file: '19-womens-dictionary-of-symbols-1', title: '여성 상징 사전 1',       subtitle: '모양',                                        author: '바버라 G. 워커',                                                              translator: '여성 상징 번역 모임',             publisher: '돌고래' },
  { file: '18-lines',                        title: '모든 것은 선을 만든다',                                                              author: '팀 잉골드',                                                                   translator: '차은정, 권혜윤, 김성인',          publisher: 'ㅇㅣㅂㅣ' },
  { file: '17-animal-place',                 title: '동물의 자리',              subtitle: '먹히지 않고 늙어가는 동물들을 만나다',          author: '김다은, 정윤영, 신선영',                                                      publisher: '돌고래' },
  { file: '16-soup-counseling',              title: '든든한 수프 상담소',       subtitle: '영업 시작했습니다, 고민 받습니다!',             author: '김은채, 김은화, 방혜리',                                                      publisher: '북세포' },
  { file: '15-my-first-scenario',            title: '나의 첫 시나리오',         subtitle: '불쌍한 우리 아기, 대전 일기',                  author: '정서경',                                                                      publisher: '돌고래' },
  { file: '14-becoming-a-girl',              title: '소녀가 되어가는 시간',     subtitle: '트랜스젠더 어린이가 가족과 공동체와 함께 성장한다는 것', author: '에이미 엘리스 넛',                                                   translator: '현아율',                          publisher: '돌고래' },
  { file: '13-thousand-ships',               title: '천 척의 배',               subtitle: '트로이아 전쟁의 여성들',                       author: '나탈리 헤인스',                                                               translator: '홍한별',                          publisher: '돌고래' },
  { file: '12-no-more-clothes',              title: '옷을 사지 않기로 했습니다', subtitle: '기후위기와 패스트패션에 맞서는 제로웨이스트 의생활', author: '이소연',                                                               publisher: '돌고래' },
  { file: '11-almond',                       title: '아몬드',                                                                             author: '손원평',                                                                      publisher: '다즐링' },
  { file: '10-villain-narratives',           title: '악인의 서사',              subtitle: '수많은 창작물 속 악, 악행, 빌런에 관한 아홉 가지 쟁점', author: '듀나, 박혜진, 전승민, 김용언, 강덕구, 전자영, 최리외, 이융희, 윤아랑', publisher: '돌고래' },
  { file: '09-care-and-work-2',              title: '돌봄과 작업 2',            subtitle: '나만의 방식으로 엄마가 되기를 선택한 여자들',   author: '김유담, 정아은, 장수연, 이수현, 황다은, 김다은, 김연화, 김은화, 김잔디, 소복이, 임효영', publisher: '돌고래' },
  { file: '08-my-beloved-interrupters',      title: '나의 사랑스러운 방해자',   subtitle: '앨리스 닐, 도리스 레싱, 어슐러 르 귄, 오드리 로드, 앨리스 워커, 앤절라 카터… 돌보는 사람들의 창조성에 관하여', author: '줄리 필립스', translator: '박재연, 박선영, 김유경, 김희진', publisher: '돌고래' },
  { file: '07-walking-with-apes',            title: '유인원과의 산책',          subtitle: '제인 구달, 다이앤 포시, 비루테 갈디카스',       author: '사이 몽고메리',                                                               translator: '김홍옥',                          publisher: '돌고래' },
  { file: '06-care-and-work',                title: '돌봄과 작업',              subtitle: '나를 잃지 않고 엄마가 되려는 여자들',           author: '정서경, 서유미, 홍한별, 임소연, 장하원, 전유진, 박재연, 엄지혜, 이설아, 김희진, 서수연', publisher: '돌고래' },
  { file: '05-pink-dolphin',                 title: '아마존 분홍돌고래를 만나다',                                                         author: '사이 몽고메리',                                                               translator: '승영조',                          publisher: '돌고래' },
  { file: '04-women-politicians-1',          title: '세상을 바꾼 여성정치인들 1', subtitle: '여성의정 인물사 시리즈 1',                   author: '한국여성의정',                                                                publisher: '여성의정' },
  { file: '03-national-park-casebook',       title: '2020 국립공원공단 사회적 가치.혁신 우수사례집', subtitle: '2021-02',                 author: '국립공원공단',                                                                publisher: '국립공원공단' },
  { file: '02-seoul-innovation-report',      title: '서울혁신센터 사회혁신 트렌드리포트', subtitle: '2020-2021',                          author: '빅이슈코리아',                                                                publisher: '서울혁신센터' },
  { file: '01-mom-raised-me',                title: '나는 엄마가 먹여 살렸는데',                                                          author: '김은화',                                                                      publisher: '딸세포(피치북스)' },
  { file: '00-jobs',                         title: '스티브 잡스',                                                                        author: '월터 아이작슨',                                                               translator: '안진환',                          publisher: '민음사' }
];

document.addEventListener('DOMContentLoaded', function () {
  var grid = document.getElementById('portfolio-grid');
  if (!grid) return;

  var isKr = window.location.pathname.indexOf('/kr/') !== -1;
  var imgBase = isKr ? '../assets/images/' : 'assets/images/';

  books.forEach(function (b) {
    var subtitle = b.subtitle ? '<span class="book-subtitle">' + b.subtitle + '</span>' : '';
    var translator = b.translator ? '<p class="book-translator">' + b.translator + '</p>' : '';

    var a = document.createElement('a');
    a.className = 'book-link-wrapper';
    a.innerHTML =
      '<div class="book-card-container">' +
        '<div class="book-card">' +
          '<div class="book-front"><img src="' + imgBase + b.file + '.jpg" alt="' + b.title + '"></div>' +
          '<div class="book-back">' +
            '<h3 class="book-title">' + b.title + ' ' + subtitle + '</h3>' +
            '<p class="book-author">' + b.author + '</p>' +
            translator +
            '<p class="book-publisher">' + b.publisher + '</p>' +
          '</div>' +
        '</div>' +
      '</div>';
    grid.appendChild(a);
  });
});
