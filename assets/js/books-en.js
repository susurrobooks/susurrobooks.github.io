var booksEn = [
  { file: '22-community',                      title: 'Welcome to the Community',             subtitle: 'Toward a Politics That Connects Us Beyond Our Own Realities', author: 'Seongmin Kwon',                                                                                              publisher: 'Dolgorae' },
  { file: '21-turtle-time',                    title: 'Of Time and Turtles',                  subtitle: 'The World of These Remarkable Creatures',                    author: 'Sy Montgomery, illus. Matt Patterson',                                                                        translator: 'trans. Eunyoung Cho',             publisher: 'Dolgorae' },
  { file: '20-womens-dictionary-of-symbols-2', title: 'The Woman\'s Dictionary of Symbols 2', subtitle: 'Divine Beings and Rituals',                                  author: 'Barbara G. Walker',                                                                                          translator: 'trans. Women\'s Symbols Translation Collective', publisher: 'Dolgorae' },
  { file: '19-womens-dictionary-of-symbols-1', title: 'The Woman\'s Dictionary of Symbols 1', subtitle: 'Shapes',                                                     author: 'Barbara G. Walker',                                                                                          translator: 'trans. Women\'s Symbols Translation Collective', publisher: 'Dolgorae' },
  { file: '18-lines',                          title: 'Lines: A Brief History',                                                                                        author: 'Tim Ingold',                                                                                                 translator: 'trans. Eunjung Cha, Hyeyoon Kwon, Sungin Kim',   publisher: 'ibi' },
  { file: '17-animal-place',                   title: 'A Place for Animals',                  subtitle: 'Meeting Animals Who Age Without Being Eaten',                author: 'Daeun Kim, Yunyoung Jeong, Sunyoung Shin',                                                                   publisher: 'Dolgorae' },
  { file: '16-soup-counseling',                title: 'The Soup Counseling Center',           subtitle: 'Now Open — Bring Us Your Worries!',                          author: 'Eunchae Kim, Eunhwa Kim, Hyeri Bang',                                                                        publisher: 'Booksapo' },
  { file: '15-my-first-scenario',              title: 'My First Screenplay',                  subtitle: 'Poor Baby, Daejeon Diary',                                   author: 'Seogyeong Jeong',                                                                                            publisher: 'Dolgorae' },
  { file: '14-becoming-a-girl',                title: 'Becoming Nicole',                      subtitle: 'The Transformation of an American Family',                   author: 'Amy Ellis Nutt',                                                                                             translator: 'trans. Aryul Hyeon',              publisher: 'Dolgorae' },
  { file: '13-thousand-ships',                 title: 'A Thousand Ships',                     subtitle: 'The Women of the Trojan War',                                author: 'Natalie Haynes',                                                                                             translator: 'trans. Hanbyeol Hong',            publisher: 'Dolgorae' },
  { file: '12-no-more-clothes',                title: 'No More Clothes',                      subtitle: 'Zero-Waste Fashion Against Climate Crisis and Fast Fashion',  author: 'Soyeon Lee',                                                                                                 publisher: 'Dolgorae' },
  { file: '11-almond',                         title: 'Almond',                                                                                                        author: 'Wonpyung Sohn',                                                                                              publisher: 'Dazzling' },
  { file: '10-villain-narratives',             title: 'The Villain\'s Narrative',             subtitle: 'Nine Perspectives on Evil, Villainy, and Villains in Fiction', author: 'Djuna, Hyejin Park, Seungmin Jeon, Yongon Kim, Deokgu Kang, Jayoung Jeon, Rioe Choi, Yunghee Lee, Arang Yoon', publisher: 'Dolgorae' },
  { file: '09-care-and-work-2',                title: 'Care and Work 2',                      subtitle: 'Women Who Chose Motherhood on Their Own Terms',               author: 'Yudam Kim, Aeun Jeong, Suyeon Jang, Suhyeon Lee, Daeun Hwang, Daeun Kim, Yeonhwa Kim, Eunhwa Kim, Jandi Kim, Sobogi, Hyoyoung Im', publisher: 'Dolgorae' },
  { file: '08-my-beloved-interrupters',        title: 'The Baby on the Fire Escape',          subtitle: 'Creativity, Motherhood, and the Mind-Baby Problem',           author: 'Julie Phillips',                                                                                             translator: 'trans. Jaeyeon Park, Seonyoung Park, Yugyeong Kim, Heejin Kim', publisher: 'Dolgorae' },
  { file: '07-walking-with-apes',              title: 'Walking with the Great Apes',          subtitle: 'Jane Goodall, Dian Fossey, Biruté Galdikas',                 author: 'Sy Montgomery',                                                                                              translator: 'trans. Hongok Kim',               publisher: 'Dolgorae' },
  { file: '06-care-and-work',                  title: 'Care and Work',                        subtitle: 'Women Trying to Become Mothers Without Losing Themselves',   author: 'Seogyeong Jeong, Yumi Seo, Hanbyeol Hong, Soyeon Im, Hawon Jang, Yujin Jeon, Jaeyeon Park, Jihye Eom, Seola Lee, Heejin Kim, Suyeon Seo', publisher: 'Dolgorae' },
  { file: '05-pink-dolphin',                   title: 'Spell of the River Dolphins',                                                                                   author: 'Sy Montgomery',                                                                                              translator: 'trans. Yeongjo Seung',            publisher: 'Dolgorae' },
  { file: '04-women-politicians-1',            title: 'Women Politicians Who Changed the World 1', subtitle: 'Women in Politics Biography Series 1',               author: 'Korea Women\'s Political Caucus',                                                                             publisher: 'Women\'s Political Caucus' },
  { file: '03-national-park-casebook',         title: '2020 Korea National Park Service Best Practices', subtitle: '2021-02',                                       author: 'Korea National Park Service',                                                                                publisher: 'Korea National Park Service' },
  { file: '02-seoul-innovation-report',        title: 'Seoul Innovation Trend Report',        subtitle: '2020–2021',                                                  author: 'Big Issue Korea',                                                                                            publisher: 'Seoul Innovation Center' },
  { file: '01-mom-raised-me',                  title: 'My Mother Raised Me',                                                                                           author: 'Eunhwa Kim',                                                                                                 publisher: 'Dalsepo (Peach Books)' },
  { file: '00-jobs',                           title: 'Steve Jobs',                                                                                                    author: 'Walter Isaacson',                                                                                            translator: 'trans. Jinhwan An',               publisher: 'Minumsa' }
];

document.addEventListener('DOMContentLoaded', function () {
  var grid = document.getElementById('portfolio-grid');
  if (!grid) return;

  booksEn.forEach(function (b) {
    var subtitle = b.subtitle ? '<span class="book-subtitle">' + b.subtitle + '</span>' : '';
    var translator = b.translator ? '<p class="book-translator">' + b.translator + '</p>' : '';

    var a = document.createElement('a');
    a.className = 'book-link-wrapper';
    a.innerHTML =
      '<div class="book-card-container">' +
        '<div class="book-card">' +
          '<div class="book-front"><img src="../assets/images/' + b.file + '.jpg" alt="' + b.title + '"></div>' +
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
