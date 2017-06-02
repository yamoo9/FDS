/*! data.json @ 2017, yamoo9.net */


// 배열을 집합으로 사용한 데이터 포멧
var classUsingArray = [
  {
    name: '한진아',
    age: 23,
    gender: 'female',
    email: 'jina.han@fashiongo.com',
    hobby: '십자수',
    school: {
      name: '한림대',
      grade: 3
    },
    major: '통계학',
    minor: '영문학',
    family: ['아빠', '엄마', '남동생']
  },
  {
    name: '김지혜',
    age: 21,
    gender: 'female',
    email: 'jjae276@gmail.com',
    hobby: 'DIY 인테리어',
    school: {
      name: '가야대',
      grade: 2
    },
    major: '설치 미술',
    minor: '인류학',
    family: ['아빠', '엄마']
  },
  {
    name: '이은솔',
    age: 20,
    gender: 'female',
    email: 'cabbit@daum.net',
    hobby: '포스터 디자인',
    school: {
      name: '홍익대',
      grade: 1
    },
    major: '시각 디자인',
    minor: null,
    family: ['아빠', '엄마', '언니']
  },
  {
    name: '이가영',
    gender: 'female',
    age: 22,
    email: '2gaa0@naver.com',
    hobby: '테니스',
    school: {
      name: '이화여대',
      grade: 2
    },
    major: '사회 체육',
    minor: null,
    family: ['엄마', '언니', '오빠', '남동생']
  },
  {
    name: '천송희',
    gender: 'female',
    age: 26,
    email: 'superluckhee@naver.com',
    hobby: '테니스',
    school: {
      name: '서강대',
      grade: 4
    },
    major: '컴퓨터 공학',
    minor: '딥 러닝',
    family: ['아빠']
  },
  {
    name: '정하윤',
    gender: 'female',
    age: 24,
    email: 'hahayuni89@gmail.com',
    hobby: '캘리그라피',
    school: {
      name: '연세대',
      grade: 3
    },
    major: '서양화',
    minor: '동양화',
    family: ['아빠', '엄마', '남동생']
  },
  {
    name: '배진호',
    gender: 'male',
    age: 32,
    email: 'znfamily7@gmail.com',
    hobby: '프로그래밍',
    school: {
      name: '서울대',
      grade: 4
    },
    major: '국문학',
    minor: '물리',
    family: ['아빠', '여동생']
  },
  {
    name: '김태우',
    gender: 'male',
    age: 29,
    email: 'taewoo.kim@athenaslab.com',
    hobby: '요리',
    school: {
      name: '부산대',
      grade: 2
    },
    major: '호텔 조리',
    minor: '미용',
    family: ['아빠', '엄마', '누나', '형', '여동생']
  },
  {
    name: '이민희',
    gender: 'female',
    age: 44,
    email: 'minhi981@naver.com',
    hobby: '연기',
    school: null,
    major: null,
    minor: null,
    family: ['아빠', '엄마', '오빠']
  },
  {
    name: '곽현지',
    gender: 'female',
    age: 25,
    email: 'hicpfl@naver.com',
    hobby: 'TV 드라마 시청',
    school: {
      name: '고려대',
      grade: 4
    },
    major: '광고학',
    minor: '작곡',
    family: ['아빠', '엄마']
  }
];


// ————————————————————————————————————


// 객체를 집합으로 사용한 데이터 포멧
var classUsingObject = {
  '한진아': {
    age: 23,
    email: 'jina.han@fashiongo.com',
    hobby: '십자수',
    school: {
      name: '한림대',
      grade: 3
    },
    major: '통계학',
    minor: '영문학',
    family: ['아빠', '엄마', '남동생']
  },
  '김지혜': {
    age: 21,
    gender: 'female',
    email: 'jjae276@gmail.com',
    hobby: 'DIY 인테리어',
    school: {
      name: '가야대',
      grade: 2
    },
    major: '설치 미술',
    minor: '인류학',
    family: ['아빠', '엄마']
  },
  '이은솔': {
    age: 20,
    gender: 'female',
    email: 'cabbit@daum.net',
    hobby: '포스터 디자인',
    school: {
      name: '홍익대',
      grade: 1
    },
    major: '시각 디자인',
    minor: null,
    family: ['아빠', '엄마', '언니']
  },
  '이가영': {
    gender: 'female',
    age: 22,
    email: '2gaa0@naver.com',
    hobby: '테니스',
    school: {
      name: '이화여대',
      grade: 2
    },
    major: '사회 체육',
    minor: null,
    family: ['엄마', '언니', '오빠', '남동생']
  },
  '천송희': {
    gender: 'female',
    age: 26,
    email: 'superluckhee@naver.com',
    hobby: '테니스',
    school: {
      name: '서강대',
      grade: 4
    },
    major: '컴퓨터 공학',
    minor: '딥 러닝',
    family: ['아빠']
  },
  '정하윤': {
    gender: 'female',
    age: 24,
    email: 'hahayuni89@gmail.com',
    hobby: '캘리그라피',
    school: {
      name: '연세대',
      grade: 3
    },
    major: '서양화',
    minor: '동양화',
    family: ['아빠', '엄마', '남동생']
  },
  '배진호': {
    gender: 'male',
    age: 32,
    email: 'znfamily7@gmail.com',
    hobby: '프로그래밍',
    school: {
      name: '서울대',
      grade: 4
    },
    major: '국문학',
    minor: '물리',
    family: ['아빠', '여동생']
  },
  '김태우': {
    gender: 'male',
    age: 29,
    email: 'taewoo.kim@athenaslab.com',
    hobby: '요리',
    school: {
      name: '부산대',
      grade: 2
    },
    major: '호텔 조리',
    minor: '미용',
    family: ['아빠', '엄마', '누나', '형', '여동생']
  },
  '이민희': {
    gender: 'female',
    age: 44,
    email: 'minhi981@naver.com',
    hobby: '연기',
    school: null,
    major: null,
    minor: null,
    family: ['아빠', '엄마', '오빠']
  },
  '곽현지': {
    gender: 'female',
    age: 25,
    email: 'hicpfl@naver.com',
    hobby: 'TV 드라마 시청',
    school: {
      name: '고려대',
      grade: 4
    },
    major: '광고학',
    minor: '작곡',
    family: ['아빠', '엄마']
  }
};