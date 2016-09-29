###### Front-End Develop SCHOOL

# DAY 04

### GIT/GITHUB 특강

#### GIT

Version control system(버전 관리 시스템)으로 프로젝트를 진행하면서 생성하는 코드를 분산 관리 하기 위해 사용되는 툴이다.

##### GIT의 용어 정리

- __working directory__<br>
	실질적으로 개발자가 소스를 작성하는 디렉토리(파일)
- __staging area__<br>
	working directory에서 소스를 작성 후에 local repo로 commit하기 전에 임시적으로 머무는 위치
- __local repository__<br>
	local에 있는 repository를 말하며 server에 있는 repository를 복사해 온 것이다. 이 repository에는 commit을 하면 이 곳에 저장이 되고, server에 있는 repository를 pull(복제)하였을 때 이 곳(local repository)에 저장이 된다.
- __remote repository__<br>
	원격 저장소로 즉 commit이 완료되 local repository에 있는 것을 server에 있는 repository로 push하면 github에 있는 repository가 업데이트 된다.
- __fetch__<br>
	remote repository에 있는 파일들을 local repository로 받아 온다. 하지만 현재 local repository에 있는 파일들과 합쳐지지 않은 상태이다.
- __merge__<br>
	fetch로 받아온 파일들을 local repository에 있는 파일과 합치는 것이다.
- __pull__<br>
	pull은 remote repository에 있는 파일들을 fetch -> merge를 한번에 하는 것이다.

##### GIT사용 방법

- GUI환경 (Graphic User Interface) -> ex> 소스트리
- CLI환경 (Command line interface) -> ex> 명령프롬프트, 파워쉘, git bash, 터미널

##### GIT 장점

- 로컬 저장소가 제공된다.
- 소스 코드 공유가 용이하다.
- 개발하는 동안 변경사항을 스텝별로 저장 가능
- 오류, 버그가 났을 경우 특정 스텝으로 이동이 가능하다.

-

### 명령프롬프트 사용하기

#### 명령어 정리

```sh
# 폴더 목록을 출력한다. option에는 al이 있는데, 폴더 목록을 출력할 때 자세히(숨김파일, 파일소유주, 권한) 출력한다.
$ ls --option
# 화면에 출력한 내용들을 지워 준다.
$ clear
# 폴더(디렉토리)를 만든다. make directory이다.
mkdir <폴더명>
# 해당 폴더명으로 이동한다. change directory이다.
$ cd <폴더명>
# 명령어 사이에 &&를 넣으면 차례로 명령을 실행한다.
# $ mkdir aa && cd aa
$ <명령어> && <명령어>
# 해당 폴더명을 삭제한다. 폴더 안의 하위 폴더도 함께 지운다.
$ sudo rm -rf <폴더명>
# 현재 폴더 안에 파일명으로 된 파일을 생성한다.
$ touch <파일명>
# 현재 커서위치에서 내용을 파일명에 넣고 파일을 만든다.
echo "내용" >> <파일명>
# 해당 파일명의 편집모드로 들어간다.
$ vi <파일명>

# vi 편집모드 상태
# esc 누르고 사용해야 한다.
# i   : 삽입모드
# q!  : 저장안하고 나오기
# :wq : 저장하고 나오기
```

-

### GIT 사용하기

local에서 원하는 경로로 가서 git를 사용할 폴더를 만든다.
> ex> c:\git     => 해당 경로(c드라이브 및)에 에 git라는 폴더를 만든다.

-

해당 폴더로 이동한다.

-

git 설정 초기화를 한다. (아래 단계부터는 명령창에서 명령어를 입력한다.)
> ex> git init

-

git 서버에 있는 저장소를 복사한다. / remote repository를 local repository로 clone 한다.
 최초로 서버에 있는 저장소를 복제 할 때는 pull이 아니라 clone이다.
> ex> git clone http://....    => git clone 저장소 주소

-

원격 저장소와 연결이 되어 있는지 확인한다.
> ex> git remote -v 	=> fetch와 push 두가지가 연결되었다고 나올 것이다.

-

연결이 완료되고 clone도 잘 완료 되었다면 C드라이브 및 git 폴더 안에 복제한 폴더가 생성 되었을 것이다.

-

복제된 폴더 및 내용을 확인하고 수정한다. a.txt라는 파일을 수정했다고 가정하자.

-

이제 a.txt라는 파일을 서버에 올릴 것이다.

-

올리는 순서는 add -> commit -> push 이다.

-

add단계 : a.txt라는 수정된 파일을 staging area에 놓는다.
> ex> git add . 		=> .을 입력하면 수정된 모든 파일을 올리겠다라는 의미이다.

-

staging area에 잘 올라갔는지 확인한다.
>	ex> git status		=> add된 a.txt라는 파일이 녹색으로 출력 될 것이다.
    					=> add하기 전이라면 빨간색으로 출력 될 것이다.

-

commit단계 : staging area에 있는 a.txt를 local repository로 올리는 단계이다. commit을 할 경우에는 commit message가 필요하다.
>	ex> git commit -m "." 	=> -m 은 메시지를 입력하겠다라는 옵션이며 "메시지내용"을 함께 적어준다.

-

push단계 : local repository 에 있는 a.txt를 remote repository로 올린다. 이 작업이 끝나면 서버(remote repository)에 최종적으로 파일이 올라가게 되며 최신상태로 업데이트가 된다.
>	ex> git push origin master	=> master 권한(branch명)으로 내 local repository(origin)를 push하겠다 라는 의미이다. master와 origin은 별다른 설정이 없다면 이와 같이 설정이 된다.

-

추가적으로 다른 사용자와 함께 공유할 경우 충돌이 날 수 있는 상황을 생각해보자.

-

A와 B가 같은 remote repository를 각각의 local에 복제한 후 a.txt라는 파일을 각각 수정 하였다.

-

A가 먼저 remote repository에 push를 했을 때 B는 commit을 한 상태 였다.

-

B가 push를 하려고 할 때 B의 local repository에는 B가 수정한 a.txt라는 파일이 있고, remote repository에는 A가 수정한 a.txt가 있으므로 현재 B의 local의 a.txt와 remote repository에 있는(즉 최신상태의) a.txt가 일치하지 않으므로 충돌이 난다.

-

B는 충돌이 나서 push가 안되므로 pull을 먼저 해야 하는데, 이 때 업데이트 되는 파일이 B가 수정된 파일이므로 오류가 발생 할 수 있다.

-

이 때 merge를 통해 다른 부분(수정된 부분)을 찾아 바꿔주어 pull로 local을 최신상태를 만든다.

-

그 이후에 자신이 추가적으로 수정하여 remote repository에 push하게 되면 완료가 된다.

-

A는 pull을 하면 최신 상태를 받아 올 수 있고, A,B 모두 최신 상태를 local에 복사 할 수 있다.

-

### 그 외 git 명령어

git reference를 참고한다. https://git-scm.com/docs

```sh
git 명령어 ‐‐help           => 도움말같이, 명령어 모를때 도움됨.
git log                    => 커밋한 사람과 시간, 커밋코멘트가 나온다.
git config --list          => git폴더에서 나의 config 리스트를 볼 수 있다. 설정한 리스트 모든것을 보여준다.(config=구성파일 )
git pull --rebase o~n m~r  => https://git-scm.com/book/ko/v1/Git-%EB%B8%8C%EB%9E%9C%EC%B9%98-Rebase%ED%95%98%EA%B8%B0
git giff                   => 파일을 비교한다.
```