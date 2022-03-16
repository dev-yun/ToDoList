const proverbs = [
  {
    proverb: '삶이 있는 한 희망은 있다.',
    Auther: '키케로',
  },
  {
    proverb:
      '진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해.',
    Auther: '찰리 채플린',
  },
  {
    proverb:
      '단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?',
    Auther: '이드리스 샤흐',
  },
  {
    proverb: '한번의 실패와 영원한 실패를 혼동하지 마라.',
    Auther: 'F.스콧 핏제랄드',
  },
  {
    proverb:
      '너무 소심하고 까다롭게 자신의 행동을 고민하지 말라 . 모든 인생은 실험이다 . 더많이 실험할수록 더나아진다.',
    Auther: '랄프 왈도 에머슨',
  },
  {
    proverb:
      '절대 어제를 후회하지 마라. 인생은 오늘의  내 안에 있고 내일은 스스로 만드는것이다.',
    Auther: 'L.론허바드',
  },
  {
    proverb: '오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.',
    Auther: '앙드레 말로',
  },
  {
    proverb:
      '평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라.',
    Auther: '제임스 딘',
  },
  {
    proverb:
      '고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다.',
    Auther: '괴테',
  },
  {
    proverb:
      '고난의 시기에 동요하지 않는 것, 이것은 진정 칭찬받을 만한 뛰어난 인물의 증거다.',
    Auther: '베토벤',
  },
  {
    proverb:
      '자신이 해야 할 일을 결정하는 사람은 세상에서 단 한 사람, 오직 나 자신뿐이다.',
    Auther: '오손 웰스',
  },
];
const provTitle = document.querySelector('.proverb span:first-child');
const content = document.querySelector('.proverb span:last-child');

function showTitleAndContent() {
  const randomProv = proverbs[Math.floor(Math.random() * proverbs.length)];

  provTitle.innerHTML = `${randomProv.proverb}`;
  content.innerHTML = `${randomProv.Auther}`;
}

showTitleAndContent();
