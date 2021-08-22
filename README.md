# NC_Youtube_clone_coding


[![Node.js](https://img.shields.io/badge/node->=14.0.0-339933?logo=nodedotjs&logoColor=white&style=for-the-badge)](https://nodejs.org/)
[![Pug](https://img.shields.io/badge/pug->=3.0.0-A86454?logo=pug&logoColor=white&style=for-the-badge)](https://pugjs.org/)
[![Scss](https://img.shields.io/badge/scss->=0.2.0-BF4080?logo=sass&logoColor=white&style=for-the-badge)](https://sass-lang.com/)
[![MongoDB](https://img.shields.io/badge/mongodb-mongoose>=5.0.0-13AA52?logo=mongodb&logoColor=white&style=for-the-badge)](https://www.mongodb.com/)


학습 목적으로 제작한 유튜브 클론코딩 사이트입니다.

Heroku를 통해 배포되어 아래 링크를 통해 이용 가능합니다.  
가끔 접속하는데 시간이 오래걸리거나 접속 오류가 있을 수 있습니다.  
접속이 될 때 까지 새로고침 및 재접속 시도를 지속하면 5분 내로 들어가집니다(...)

### Deploy Link
> https://jo-tube.herokuapp.com/

구현한 기능은 다음과 같습니다

### 1.User 🙍‍♂️🙍‍♀️
```
1-1. 로컬 회원가입/로그인
 - Passport.js, local-mongoose로 로컬 로그인 구현
1-2. Oauth SNS 로그인
 - 로컬과 마찬가지로 Passport.js와 local-mongoose로 구현
 - Github(O)
 - Facebook(X) clientID 와 설정 문제로 배포환경에서는 이용이 불가능
1-3. 유저 프로필 사진 업로드
 - Multer를 통해 이미지 업로드가 가능
 - S3와 연동하여 유저가 업로드한 이미지 파일은 S3에 저장
1-4. 유저 프로필 페이지에서 업로드한 비디오 모아보기 가능
1-5. 헤더 메뉴를 통해 로그아웃 가능
```

### 2. Video 🎬🎥
```
2-1. 비디오 업로드(Create)
  - 로그인한 유저의 권한을 확인하여 업로드 페이지에 접근 가능
  - 프로필 이미지와 마찬가지로 multer와 s3를 통해 동영상 파일 관리
2-2. 비디오 조회(Read)
  - 업로드된 비디오를 메인 페이지, 유저 프로필 페이지, 검색 페이지 등에서 미리보기 가능
  - 클릭 시 비디오 상세보기 페이지로 이동
2-3. 비디오 수정(Update)
  - 비디오 상세 보기 페이지에서, 유저가 작성한 비디오의 경우 수정이 가능
2-4. 비디오 삭제(Delete)
  - 비디오 수정 페이지에서 삭제버튼을 통해 비디오 삭제 가능
```

### 3. Comment 📝
```
3-1. 댓글 업로드(Create)
  - 로그인한 유저는 동영상 상세보기 페이지에서 하단 입력창을 통해 댓글 작성이 가능
3-2. 유저 페이지로 이동
  - 작성된 댓글에 있는 유저 닉네임을 클릭하면 해당 유저의 프로필 페이지로 이동 가능
```

### 4. Search 🔎
```
4-1. 제목으로 검색
  - 헤더 메뉴를 통해 페이지 내 어디서든 검색창으로 비디오 제목을 검색 가능
```

