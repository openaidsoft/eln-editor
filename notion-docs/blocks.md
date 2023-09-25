# 블록
## 기타
### 블록 이동
- 블록 핸들을 상/하로 드래그하면 해당 블록을 끼워넣을 수 있는 곳에 파란색 수평선이 나타나고 드랍하면 해당 위치로 이동함
### 열 만들기
- 블록 핸들을 드래그하여 다른 블록의 좌/우로 가져가면 파란색 수직선이 나타나고 드랍하면 해당 위치로 이동하며 열이 생성됨
- 열 아래에 또 다른 블록을 위치시키면 열 내에 행이 만들어지며 이는 마치 표처럼 보이기도 함
  - 하지만 표와는 다른 블록임
  - 표는 표 자체가 하나의 블록이나 행열로 만들어진 블록들은 각각 독립적인 블록이며 전체가 하나의 블록으로 움직일 수 없음
### 계층구조를 가진 블록
- 아래 블록들은 계층구조를 가짐
  - 글머리 기호 목록
  - 번호 매기기 목록
  - 토글 목록
- 화면상에서 목록 블록은 들여쓰기와 불릿으로 레벨을 구분함
- 하위 목록들의 각 아이템(노드) 역시 독립적인 블록이며 목록 전체를 하나의 블록으로 사용할 수도 있음
  - 자식을 가진 노드인 경우 블록 핸들로 움직이면 자식과 함께 움직임
- 콘텐츠 블록을 목록 블록 내부로 이동시키면 목록의 레벨을 지정하여 위치시킬 수 있음
  - 파란색 수평선이 레벨별로 나뉘어 표시됨
- 목록이 아닌 블록도 목록 사이에 레벨을 구별하여 위치시킬 수 있음

## 기본블록

### 텍스트
- 기본 블록
- 가장 기본적인 일반 텍스트
### 페이지
- 페이지 안에 새 페이지 생성
### 할 일 목록
- 해야 할 일을 체크박스 목록으로 생성
- 단축키 `[]`
### 제목1
- 가장 큰 크기의 제목
- 단축키 `/h1`
### 제목2
- 중간 크기의 제목
- 단축키 `/h2`
### 제목3
- 가장 작은 제목
- 단축키 `/h3`
### 표
- 행과 열로 구성된 간단한 표
### 글머리 기호 목록
- 글머리 기호 목록
- 단축키 `-, space`
### 번호 매기기 목록
- 목록을 들여쓰고 자동으로 다음 번호를 생성
### 토글 목록
- 토글을 생성
- 토글 아래에 콘텐츠를 입력한 후, 토글을 열어서 표시하거나 닫아서 숨길 수 있음
- 단축키 `>, space`
### 인용
- 문서에서 인용하려는 부분을 빼내고 큰 텍스트로 강조 처리
### 구분선
- 텍스트를 나누기 위한 가는 회색선을 생성
- 단축키 `---`
### 페이지 링크
- 워크스페이스의 다른 페이지로 연결되는 링크 역할의 블록 생성
### 콜아웃
- 팁, 경고, 법적 고지 사항 등 중요한 텍스트를 담는 상자를 생성


## 고급 블록
#### 목차
- 페이지의 모든 제목을 링크로 만든 링크 목록 형태의 목차
#### 수학 공식 블록
#### 버튼
- 문서에서는 `템플릿 버튼`이라는 명칭을 사용하기도 함
- 일종의 블록 생성 매크로
- 반복적으로 사용하려는 블록의 조합을 템플릿으로 지정하고, 템플릿 버튼을 통해 한 번에 생성할 수 있음
#### 이동 경로
- 이동 경로가 자동 생성되어 표시
- 페이지가 워크스페이스의 어느 위치에 있는지 한 눈에 볼 수 있음
#### 동기화 블록
#### 제목 토글1
#### 제목 토글2
#### 제목 토글3
#### 2개의 열
#### 3개의 열
#### 4개의 열
#### 5개의 열
#### 코드 - Mermaid