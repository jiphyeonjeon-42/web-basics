---
marp: true
---

# 온보딩코스 웹기초

2/22

---



# 1. 웹서비스란?

---

## 오늘 배울 단어

- 웹서비스
- 웹서버
- 웹페이지
- 웹사이트
- URL
- HTTP

---

### 웹서비스

- API의 한 종류
- 네트워크에서 컴퓨터들끼리 상호작용하기 위한 서비스
- 주로 XML, HTTP와 같은 프로토콜로 JSON이나 XML같은 정보를 주고받음

```sh
curl https://jsonplaceholder.typicode.com/users/1
```

<!--
  API: 소프트웨어가 다른 소프트웨어와 상호작용하기 위한 인터페이스

  https://www.w3.org/TR/2004/NOTE-ws-gloss-20040211/#webservice
  https://ko.wikipedia.org/wiki/웹_서비스
  https://www.reddit.com/r/explainlikeimfive/comments/2o5o5j/eli5_web_services/
  https://stackoverflow.com/questions/2205788/is-there-a-difference-between-a-web-server-and-a-web-service
-->

---

### 웹 서버

| 구분       | 하는 일                       |
| ---------- | ----------------------------- |
| 소프트웨어 | HTTP 요청 -> HTML 문서        |
| 하드웨어   | 위 프로그램이 돌아가는 컴퓨터 |

<!--
https://ko.wikipedia.org/wiki/웹_서버
-->

---

## 웹의 세계

|           웹페이지            |       웹사이트        |
| :---------------------------: | :-------------------: |
| https://dummyjson.com/todos/1 | https://dummyjson.com |

<!--
웹페이지: 웹사이트에서 하나의 문서
웹사이트: 웹페이지들의 모음
 -->

---

|    웹서버    |  검색엔진   |  브라우저   |
| :----------: | :---------: | :---------: |
| ![][express] | ![][google] | ![][chrome] |

[express]: https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png
[google]: https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg
[chrome]: https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_(February_2022).svg

<!--

웹페이지, 웹사이트, 웹서버, 검색엔진

https://developer.mozilla.org/ko/docs/Learn/Common_questions/Web_mechanics/Pages_sites_servers_and_search_engines

-->

---

## URL 알아보기

http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument

프로토콜: `http`
도메인: `www.example.com`
포트: `80`
자원에 대한 경로: `/path/to/myfile.html`
추가 파라미터: `?key1=value1&key2=value2`
anchor(닻): `SomewhereInTheDocument`

<!--
프로토콜: `http`, `mailto`, `ftp`
도메인: `www.example.com`, `127.0.0.1`
포트: `80`(http), `443`(https)
자원에 대한 경로: `/path/to/myfile.html`
추가 파라미터: `?`로 시작, `&`로 구분, `{key}={value}` 형태
anchor(닻): 절대로 서버에 전송되지 않음

https://developer.mozilla.org/ko/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL
-->

---




# 3. HTTP 요청과 응답

---

## HTTP란?

HyperText Transfer Protocol
하이퍼텍스트 전송 프로토콜

<!--
  https://developer.mozilla.org/ko/docs/Web/HTTP

  애플리케이션 레이어: OSI 모델중 최상위
  https://en.wikipedia.org/wiki/Application_layer
-->
---

## HTTP 요청

- 주어진 리소스에 하고 싶은 동작
- 예: `GET`, `POST`, `PATCH`, `DELETE`

<!--
  CRUD: Create Read Update Delete
  PUT: 리소스를 대체

  https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
-->

---

### GET

리소스를 가져오기

```json
{ "사과": 1, "바나나": 2 }
```

- GET `/` -> `{ "사과": 1, "바나나": 2 }`
- GET `/사과` -> `{ "사과": 1 }`

---

### GET - 직접 해보자!

```ts
fetch('https://jsonplaceholder.typicode.com/users/1') // 서버에서 데이터 가져오기
  .then(response => response.json()) // json으로 변환
  .then(json => console.log(json)) // 콘솔에 출력
```

`F12` -> 콘솔에 붙여넣기

<!-- 또는 curl 'https://jsonplaceholder.typicode.com/comments/1' -->

---

### GET - 직접 해보자!

![](img/get.png)

실행 결과

---

### POST

서버에 데이터를 보내기

```json
// 이전
{}
```

- POST `{ "바나나": 2 }` -> `{ "바나나": 2 }`

```json
// 이후
{ "바나나": 2 }
```

<!--
  https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Content-Type
-->

---

### PATCH

리소스 일부분을 수정하기

```json
// 이전
{ "바나나": 1 }
```

PATCH `{ "바나나": 2 }`

```json
// 이후
{ "바나나": 2 }
```

<!--
  https://developer.mozilla.org/ko/docs/Web/HTTP/Methods/PATCH
-->

---

### DELETE

지정한 리소스를 **삭제**하기

```json
// 이전
{ "바나나": 1 }
```

DELETE 바나나

```json
// 이후
{}
```

<!--
  https://developer.mozilla.org/ko/docs/Web/HTTP/Methods/DELETE
-->

---

## HTTP 응답


