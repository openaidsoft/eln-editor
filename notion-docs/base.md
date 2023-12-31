# 기본 사항

## 화면 구성
### 사이드바
- 화면 좌측의 워크스페이스별 메뉴 및 페이지 관리 영역
### 페이지 뷰어 및 편집기
- 위지윅이므로 편집과 동시에 결과물 확인
### 댓글 영역
- 화면 우측에 위치
- 특정 블록(또는 특정 텍스트)에 대한 댓글 표시

## 구성요소
### 블록
- 콘텐츠를 담을 수 있는 상자
- 텍스트, 이미지, 표 등
- 블록의 유형을 바꿀 수 있음
  - e.g. 텍스트 -> 제목1
- 페이지 내에서 블록을 이동하여 블록 순서나 페이지 구조를 바꿀 수 있음
### 페이지
- 콘텐츠를 추가할 수 있는 빈 캔버스
- 필수 구성
  - 제목
  - 블록
- 추가 구성
  - 커버
    - 페이지 상단에 커버 이미지 추가 가능
  - 아이콘
    - 페이지 제목 상단에 이모지, 아이콘, 사용자 지정 이미지 추가 가능
  - 댓글
    - 페이지 제목 하단에 페이지의 댓글 추가 가능
### 하위 페이지
- 노션은 폴더가 없으며 페이지 내의 페이지를 하위 페이지라고 표현
  - 노션 측에서는 `페이지 내의 페이지`라고 표현하지만 실제로는 링크된 페이지일 뿐
- 페이지 내에서 하위 페이지는 페이지의 링크를 담은 블록으로 표현되며 블록을 눌러 해당 하위 페이지로 이동
- 페이지의 상단과 사이드바에서 상위 페이지와 하위 페이지의 계층을 보여줌
- 계층은 고정된 것이 아니라 변경할 수 있음
  - 사이드바에서 한 페이지를 다른 페이지의 하위나 루트 등으로 이동시킬 수 있음
  - A페이지의 하위 페이지인 B페이지를 A와 같은 레벨(또는 하위가 아닌 다른 위치)로 이동한 경우
    - A페이지내에 B페이지 링크 블록이 사라짐
  - C페이지를 A페이지 하위로 이동한 경우
    - A페이지내에 C페이지의 링크 블록이 생성됨
    - 어느 위치에 생성되는지는 정확히 모름(휴리스틱으로 테스트해 볼 것)
### 데이터베이스
- 페이지의 모음
### 편집 툴
- 페이지를 원하는 대로 만들기 위한 3가지 툴
#### '+' 아이콘
- 새 라인에 마우스 커서를 가져갈 때 왼쪽 여백에 표시됨
- 클릭하면 페이지에 추가할 수 있는 콘텐츠 유형 옵션 표시됨
#### 블록 핸들
- '+' 아이콘의 오른쪽에 위치
- 클릭하면 해당 블록에서 수행할 수 있는 작업 메뉴 표시됨
- 드래그하여 드롭하면 해당 블록을 이동시킬 수 있음
- 메뉴
  - AI에게 요청
  - 삭제
  - 복제
    - 콘텐츠 블록의 동일한 복제본 생성
  - 전환
    - 블록을 다른 유형으로 전환함
  - 하위 페이지로 전환
    - 해당 블록을 페이지로 바꾸고 선택한 위치로 이동
  - 블록 링크 복사
    - 해당 블록으로 연결되는 앵커 링크를 만들어 복사
  - 옮기기
    - 워크스페이스의 다른 페이지로 블록을 이동
  - 댓글
    - 블록에 댓글 추가
  - 색
    - 색을 입히거나 강조 표시 추가
    - 텍스트, 파일, 북마크 같은 특정 유형의 블록에서만 나타남
#### '/' 명령
- '+'와 블록 핸들 메뉴에 대한 단축키
- '/' 입력하면 메뉴 창이 표시되고 메뉴를 선택한 후 엔터키로 선택할 수 있음
- '/'뒤에 블록 유형을 직접 입력하여 특정 블록을 생성할 수 있음
- '/'뒤에 블록에서 수행할 작업 입력하여 사용할 수 있음
- '/'뒤에 색 이름을 입력하여 색상 적용
