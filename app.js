// XMLHttpRequest()가 반환한 값을 변수 ajax에 입력.
const container = document.getElementById('root');
const ajax = new XMLHttpRequest();
const content = document.createElement('div');
// 비동기적으로 가져오지 않고, 동기적으로 가져오기 위해서 false 사용. true적으면 비동기적
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';

// event시스템 브라우저가 제공, 어떤 이벤트가 발생했을때 함수를 호출해줘라고 브라우저에게 셋팅 가능.
ajax.open('GET', NEWS_URL, false);
ajax.send();

// 데이터 처리 => 데이터는 response에 응답에 들어있습니다.
// console.log(ajax.response);

// JSON.parse() 를 사용해서 json형식을 객체형식으로 변경.
const newsFeed = JSON.parse(ajax.response);
// 이제 자바스크립트 객체형태로 변경
// console.log(newsFeed);

const ul = document.createElement('ul');
// i값이 10보다 작은동안 3번째인자인 조건식 수행.
window.addEventListener('hashchange', function() {
    const id = location.hash.substring(1);

    ajax.open('GET', CONTENT_URL.replace('@id', id), false);
    ajax.send();

    const newsContent = JSON.parse(ajax.response);
    const title = document.createElement('h1');
    title.innerHTML = newsContent.title;
    content.appendChild(title);
    console.log(newsContent);
});

for(let i = 0; i < 10; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.href = `#${newsFeed[i].id}`;
    a.innerHTML = `${newsFeed[i].title} (${newsFeed[i].comments_count})`;
    // a.addEventListener('click', function() {}); 
    // hashchange 사용해볼 것.

    li.appendChild(a);
    ul.appendChild(li);
}

container.appendChild(ul);
container.appendChild(content);
// document.getElementById('root').innerHTML =`<ul>
// <li>${newsFeed[0].title}</li>
// <li>${newsFeed[1].title}</li>
// <li>${newsFeed[2].title}</li>
// </ul>`