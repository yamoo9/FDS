###### Front-End Develop SCHOOL

# [RawGit](http://rawgit.com/)

─ [FAQ](https://github.com/rgrove/rawgit/blob/master/FAQ.md) 번역 ─

### 누가 RawGit을 운영하나요?

안녕하세요, 전 Ryan Grove 입니다.

-

### 이런게 왜 필요하죠? GitHub 직접 불러와 사용하면 안되나요?

`raw.githubusercontent.com`나 `gist.githubusercontent.com`에 특정 파일(Javascript, CSS 또는 HTML 과 같은)을 요청하면 GitHub에선 Content-Type 헤더의 값을 text/plain 으로 제공합니다. 최근에 나온 대부분의 브라우저는 이를 Javascript, CSS 또는 HTML 으로 인식하는 대신 일반 텍스트로 인식합니다.

__Github가 Raw 파일을 이렇게 제공하는 이유는 비효율적인 면과 사람들이 저장소(Repo)를 정적 웹 호스팅으로 사용하는 행위를 막기 위해서 입니다.__

RawGit은 캐싱 프록시처럼 작동합니다. Github에 요청해 받은 내용을 캐시해 당신이 사용하는 브라우저에 확장자를 통해 맞춰진 올바른 Content-Type 헤더와 함께 파일을 뿌려줍니다. 캐시 레이어로 Github는 서버 사용률이 최소로 줄어들고, 여러분은 빠르고 간단하게  Github 저장소에서 정적 웹 호스팅을 받을 수 있게 되는거죠. 모두에게 이득입니다!

-

### RawGit은 Github에서 운영하는 건가요?

아니요, RawGit은 Github와 전혀 관련되지 않았습니다. RawGit에 관련된 문제를 Github에게 물어보지 말아주세요.

-

### rawgit.com 과 cdn.rawgit.com 주소는 어떤 차이가 있는건가요?

rawgit.com 주소에 요청을 하게 된다면 RawGit 서버는 Github에 파일을 요청한 뒤 브라우저에 파일을 제공하고 짧은 시간 동안 캐싱하게 됩니다. 만약 Github 저장소에 새로운 변경점을 만들었다면 이를 몇 분 내에 확인하실 수 있을껍니다. 이 주소는 테스트를 하거나 데모를 공유할 때 매우 효율적일 수 있으나 이는 RawGit 과 Github 서버에 무리를 줄 수 있습니다.

cdn.rawgit.com 주소에 요청을 하게 된다면 MaxCDN의 짱짱 빠른 콘텐츠 전송 네트워크로 파일이 제공되고 경로 기반으로 CDN 레이어에 영구히 저장됩니다. 이는 RawGit 과 Github 서버 사용률을 줄여주고 최고의 성능을 낼 수 있지만 Github 저장소의 변경점은 적용되지 않습니다.

적은 트래픽으로 성능보다 새로고침이 더 중요한 개발 작업 시엔 rawgit.com 을, 여러 사람에게 공유하거나 완성 단계 시엔 cdn.rawgit.com 을 사용해주세요.
