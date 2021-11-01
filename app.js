// XMLHttpRequest()가 반환한 값을 변수 ajax에 입력.
let ajax = new XMLHttpRequest();
// 비동기적으로 가져오지 않고, 동기적으로 가져오기 위해서 false 사용. true적으면 비동기적
newsUrl = 'https://api.hnpwa.com/v0/news/1.json';
ajax.open('GET', newsUrl , false);
// 데이터를 가져오기 위해 ajax.send() 사용
ajax.send();

// 데이터 처리 => 데이터는 response에 응답에 들어있습니다.
// console.log(ajax.response);

// JSON.parse() 를 사용해서 json형식을 객체형식으로 변경.
const newsFeed = JSON.parse(ajax.response);
// 이제 자바스크립트 객체형태로 변경
// console.log(newsFeed);

const ul = document.createElement('ul');
// i값이 10보다 작은동안 3번째인자인 조건식 수행.
for(let i = 0; i < 10; i++) {
    const li = document.createElement('li');
    // <li>${newsFeed[i].title}</li>
    li.innerHTML = newsFeed[i].title
    ul.appendChild(li);
}

document.getElementById('root').appendChild(ul);
// document.getElementById('root').innerHTML =`<ul>
// <li>${newsFeed[0].title}</li>
// <li>${newsFeed[1].title}</li>
// <li>${newsFeed[2].title}</li>
// </ul>`