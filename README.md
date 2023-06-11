## Chapter1 실습 문제
### 문제
* React Project에, 직접 ApolloClient를 설치하고 Client와 Provider, Cache를 세팅하여 ApolloClient환경을 구성해봅니다.
### 출제 의도
* React에서 ApolloClient의 적용 방법을 익힙니다.

## Chapter2 실습 문제
### 문제
* React Project에, 직접 ApolloClient를 설치하고 Client와 Provider, Cache를 세팅하여 ApolloClient환경을 구성해봅니다.
* 가져올 post의 ID는 `post-1`을 사용해 주세요.
* 로딩중일때에는 ```<div>Loading...</div>```를, 데이터가 없거나 에러가 났을때에는 ```<div>Error!</div>```를, 정상적으로 데이터가 들어왔을 때에는
```
<div className="App">
  my post title is {post title}
</div>
```
를 화면에 그려주세요.

### 출제 의도
* React에서 ApolloClient를 사용해 쿼리를 요청하고 그 결과를 UI에 반영하는 방법을 익힙니다.

## Chapter3 실습 문제
### 문제
* 버튼에 바인딩된 이벤트 함수를 createPost mutation을 요청하는 내용으로 완성하세요.
* createPost mutation이 호출되었을때, apollo client 공식문서를 참고하여 posts 쿼리 데이터 캐시가 업데이트 되도록 해보세요.

### 출제 의도
* React에서 ApolloClient로 mutation 사용하는 방법을 익힙니다.
* mutation에서 캐시를 업데이트하는 방법을 익힙니다.

## Chapter4 실습 문제
### 문제
* posts쿼리와 createPost쿼리에서 요청하는 Post Schema의 필드가 동일합니다. PostTableItem Fragment를 선언해서 필드를 요청하도록 변경해보세요.
* Apollo InMemoryCache에 fragments를 선언할 수 있습니다.
* ApolloClient 공식문서를 참고하세요 https://www.apollographql.com/docs/react/data/fragments/


### 출제 의도
* Fragment의 사용 방법을 익힙니다.