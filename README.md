# 유튜브 클론코딩
## 개요
유튜브 Open API를 통한 유튜브 클론코딩하기
## 기능
- 인기있는 동영상 목록 표시 (20개)
- 동영상 검색 기능 구현
- 동영상 클릭 시 동영상 재생
- 동영상 클릭 시 해당 동영상과 연관된 동영상 목록 표시

## 사용 기술
* Youtube Open API
* HTML, JavaScript
* React, Tailwind CSS, React Router, React Query, Axios, React-icons
## 실행 방법
```
npm run start
```
## 파일 구조
```
├─ public  
│  ├─ data
│  │  ├─ cahnnel.json
│  │  ├─ popular.json
│  │  ├─ related.json
│  │  └─ search.json
│  └─ index.html
├─ src
│  ├─ api
│  │  └─ getDate.js
│  │  └─ localYoutube.js
│  │  └─ realYoutube.js
│  ├─ components
│  │  └─ Header
│  │  └─ RelativeVideo
│  │  └─ VideoCard
│  ├─ context
│  │  └─ YoutubeAPIContext.jsx
│  ├─ pages
│  │  ├─ home
│  │  ├─ main
│  │  ├─ search
│  │  └─ videodetail
│  ├─ util
│  │  └─ youtube.js
│  ├─ App.js
│  ├─ index.css
│  ├─ index.js
│ ├─ router.jsx
```
## 세부사항
### public/data
유튜브 일일 할당량 초과 방지를 위한 개발 시 mock 데이터 파일
### src/api
* getDate.js : N일 전 기능
* localYoutube.js : local 환경에서 mock 데이터를 사용해 데이터 불러오기 기능
* realYoutube : 실제 환경에서 api를 사용해 데이터 불러오기 기능
### src/components
* Header : 헤더 컴포넌트, 배너 및 검색 input 기능
* RelativeVideo : VideoDetail 페이지에서 사용하는 연관된 비디오 컴포넌트
* VideoCard : 비디오 카드 컴포넌트
### src/context
* YoutubeAPIContext.jsx : mock data, 실제 api 변경을 용이하게 하기 위해 작성한 context
### src/pages
* home : 메인 페이지 레이아웃
* main : 첫 진입 시 화면 구현 (인기있는 동영상)
* search : 검색 시 나타나는 화면
* videodetail : 비디오카드 선택 시 나타나는 비디오 재생 및 상세정보, 관련된 비디오 등을 보여주는 화면
### src/util
* youtube.js : youtube api에서 사용하는 global 변수들
### src/router.jsx
라우터 작성