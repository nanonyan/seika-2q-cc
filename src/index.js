import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

const swiper = new Swiper('.swiper-1', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

let titleElement = document.createTextNode(
  'スライド' + swiper.realIndex + 'を表示しています。',
);

let titleContainer = document.getElementById('swiper-title');
titleContainer.appendChild(titleElement);

swiper.on('slideChange', function () {
  console.log('slide changed');

  console.log(swiper.realIndex);

  titleElement.remove();

  titleElement = document.createTextNode(
    'スライド' + swiper.realIndex + 'を表示しています。',
  );
  titleContainer.appendChild(titleElement);
});

const swiper2 = new Swiper('.swiper-2', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const titles = [
  'ぴえんのイラスト（男性）',
  '浮かれる人のイラスト（女性）',
  '怖くて腰が抜ける人のイラスト（女性）',
  '悔しくてハンカチを噛む人のイラスト（男性）',
];

let titleElement2 = document.createTextNode(titles[swiper2.realIndex]);

let titleContainer2 = document.getElementById('swiper-title-2');
titleContainer2.appendChild(titleElement2);

swiper2.on('slideChange', function () {
  titleElement2.remove();

  titleElement2 = document.createTextNode(titles[swiper2.realIndex]);
  titleContainer2.appendChild(titleElement2);
});

import JustValidate from 'just-validate';
const validator = new JustValidate('#basic_form');

validator
  .addField('#basic_name', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: '3文字以上で入力してください。',
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: '15文字以内で入力してください。',
    },
  ])
  .addField('#basic_email', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
    {
      rule: 'email',
      errorMessage: 'メールの形式が正しくありません。',
    },
  ])
  .addField('#basic_password', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
    {
      rule: 'password',
      errorMessage:
        'パスワードは最低8文字、少なくとも1つの文字と1つの数字を含める必要があります。',
    },
  ])
  .addField('#basic_age', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
    {
      rule: 'number',
      errorMessage: '数字で入力してください。',
    },
    {
      rule: 'minNumber',
      value: 18,
      errorMessage: '18以上の数字を入力してください。',
    },
    {
      rule: 'maxNumber',
      value: 150,
      errorMessage: '150以下の数字を入力してください。',
    },
  ])
  .addField('#basic_address', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
    {
      rule: 'minLength',
      value: 5,
      errorMessage: '5文字以上で入力してください。',
    },
    {
      rule: 'maxLength',
      value: 100,
      errorMessage: '100文字以内で入力してください。',
    },
  ])
  .onSuccess((event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    console.log(formData.get('basic_name'));
    console.log(formData.get('basic_email'));
    console.log(formData.get('basic_password'));
    console.log(formData.get('basic_age'));
    console.log(formData.get('basic_address'));
  });
