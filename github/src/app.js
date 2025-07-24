import { Grid } from 'gridjs';
import 'gridjs/dist/theme/mermaid.css';

import JustValidate from 'just-validate';
const validator = new JustValidate('#basic_form');


validator
  .addField('#basic_name', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
  ])
  .addField('#basic_score', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
    {
      rule: 'number',
      errorMessage: '形式が正しくありません。',
    },
  ])

let gridcheck = null;

validator
  .addField('#basic_name', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
  ])
  .addField('#basic_score', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
    {
      rule: 'number',
      errorMessage: '形式が正しくありません。',
    },
  ])

  .onSuccess((event) => {
    event.preventDefault();
    let formData = new FormData(event.target);

    const basic_score = Number(formData.get('basic_score'));
    let basic_result = '';
    if (basic_score > 90) {
      basic_result = 'S';
    } else if (basic_score > 80) {
      basic_result = 'A';
    } else if (basic_score > 70) {
      basic_result = 'B';
    } else if (basic_score > 60) {
      basic_result = 'C';
    } else {
      basic_result = 'D or E or F';
    }

    const wrapper = document.getElementById('wrapper');
    if (gridcheck) {
      gridcheck.destroy();
    }
    wrapper.innerHTML = '';

    gridcheck = new Grid({
      data: [
        [formData.get('basic_name'), formData.get('basic_score'), basic_result],
      ],
      columns: ['Name', 'Score', 'Result'],
    }).render(wrapper);

    console.log(formData.get('basic_name'));
    console.log(formData.get('basic_score'));
    console.log(basic_result);
  });
