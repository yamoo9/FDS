###### JavaScript

[JavaScript 소개, MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/%EC%86%8C%EA%B0%9C) 내용을 읽고 수업에 임해봅시다.

## JavaScript는 무엇인가?

JavaScript는 크로스-플랫폼, 객체지향 스크립트 언어입니다. 작고 가벼운 언어입니다.
호스트 환경(가령, 웹 브라우저) 내에서, JavaScript는 프로그램 제어를 제공하기 위해 그 환경의 객체에 연결될 수 있습니다.

JavaScript는 Array, Date, Math와 같은 객체에 대한 표준 라이브러리와 연산자(operator), 제어 구조, 문과 같은 언어 요소의 코어 집합을 포함합니다.
코어 JavaScript는 거기에 추가 객체를 보충하여 다양한 목적으로 확장될 수 있습니다.

#### 클라이언트 측 JavaScript

브라우저와 문서 객체 모델(DOM) 을 제어하는 객체를 제공하여 코어 언어를 확장합니다.
예를 들어, 클라이언트 측 확장은 어플리케이션이 요소(element)를 HTML 폼에 두고,
마우스 클릭, 폼 입력 및 페이지 탐색 같은 사용자 이벤트에 응답하게 해줍니다.

#### 서버 측 JavaScript

서버에서 JavaScript 실행에 관련된 객체를 제공하여 코어 언어를 확장합니다.
예를 들어, 서버 측 확장은 어플리케이션이 데이터베이스와 통신하고, 한 번의 호출 정보의 연속성을
어플리케이션의 다른 곳에 제공하거나, 서버에서 파일 조작을 수행할 수 있도록 해줍니다.

## JavaScript와 Java

JavaScript와 Java는 여러 면에서 비슷하지만 어떤 면에서는 근본적으로 다릅니다.
JavaScript 언어는 Java를 닮았지만 Java의 정적 형지정(static typing)과 강한 형 검사(strong type checking)가 없습니다.
JavaScript는 대부분의 Java 식 구문, 명명 규칙 및 기본적인 흐름 제어 구조를 따릅니다.
그것이 LiveScript에서 JavaScript로 이름이 바뀐 이유였습니다.

Java의 선언에 의해 생성되는 클래스의 컴파일-타임 시스템과는 달리, JavaScript는 숫자, 불리언, 그리고 문자열 값을 표현하는
적은 수의 자료 형을 기반으로 한 런타임 시스템을 지원합니다. JavaScript 는 더 일반적인 클래스 기반 객체 모델 대신에
프로토타입 기반 객체 모델을 갖습니다. 프로토타입 기반 모델은 동적 상속을 제공합니다. 즉, 상속된 대상은 각각의 객체에 따라
다양할 수 있습니다. JavaScript는 또한 어떤 특정한 선언을 요구하지 않는 함수도 지원합니다. 함수는 객체의 속성이나,
타입이 느슨하게 형지정된 채 실행되는 메소드가 될 수 있습니다.

JavaScript는 Java에 비해 매우 자유로운 형태의 언어입니다. 여러분은 모든 변수, 클래스, 및 메소드를 선언하지 않아도 됩니다.
여러분은 메소드가 public, private, 또는 protected 인지 염려할 필요가 없고 인터페이스를 구현하지 않아도 됩니다.
변수, 매개변수(parameter), 및 함수의 반환 형은 명시적으로 지정되지 않습니다.

Java는 빠른 실행과 형 안전성(type safety)을 위해 설계된 클래스 기반 프로그래밍 언어입니다.
형 안전성은, 예를 들어, 여러분이 Java 정수를 객체의 레퍼런스로 형변환(cast)하거나 Java 바이트코드를 변경하여
private 메모리에 접근할 수 없음을 의미합니다. Java의 클래스 기반 모델은 프로그램이 오로지 클래스와 그 메소드로만
구성된다는 것을 뜻합니다. Java의 클래스 상속과 강한 형지정은 보통 단단하게 결합된 객체 계층구조를 요구합니다.
이러한 요구는 Java 프로그래밍을 JavaScript 프로그래밍보다 더 복잡하게 만듭니다.

반면에, JavaScript는 HyperTalk 과 dBASE 같은 더 작고 동적 형지정이 가능한 언어들의 정신을 계승했습니다.
이러한 스크립팅 언어는 더 쉬운 구문과 특별한 내장(built-in) 기능 및 객체 생성을 위한 최소 요구사항으로 인해
훨씬 더 많은 사람들에게 프로그래밍 도구를 제공합니다.

#### Java와 비교한 JavaScript

JavaScript | Java
--- | ---
객체 지향. 객체의 형 간에 차이 없음. 프로토타입 메커니즘을 통한 상속, 그리고 속성과 메서드는 어떤 객체든 동적으로 추가될 수 있음. |	클래스 기반. 객체는 클래스 계층구조를 통한 모든 상속과 함께 클래스와 인스턴스로 나뉨. 클래스와 인스턴스는 동적으로 추가된 속성이나 메소드를 가질 수 없음.
변수 자료형이 선언되지 않음(동적 형지정, dynamic typing). |	변수 자료형은 반드시 선언되어야 함(정적 형지정, static typing).
하드 디스크에 자동으로 작성 불가. |	하드 디스크에 자동으로 작성 가능.

JavaScript와 Java의 차이에 대한 더 많은 정보는, [객체 모델의 세부사항](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/%EA%B0%9D%EC%B2%B4_%EB%AA%A8%EB%8D%B8%EC%9D%98_%EC%84%B8%EB%B6%80%EC%82%AC%ED%95%AD) 장을 보세요.

## JavaScript와 ECMAScript 명세

JavaScript는 JavaScript에 기반한 표준화된 국제 프로그래밍 언어를 제공하기 위해 [Ecma International](http://www.ecma-international.org/)에서 표준화 됩니다 — European association for standardizing information and communication systems (ECMA는 이전에 European Computer Manufacturers Association의 두문자어였습니다). ECMAScript라 불리는 이 JavaScript의 표준화 버전은 표준을 지원하는 모든 어플리케이션에서 같은 방식으로 동작합니다. 회사들은 그들의 JavaScript 구현을 개발하기 위해 공개 표준 언어를 사용할 수 있습니다. ECMAScript 표준은 ECMA-262 명세(specification)에서 문서화 되었습니다. JavaScript와 ECMAScript 명세 판의 여러 버전에 대한 더 많은 것을 배우려면 [New in JavaScript](https://developer.mozilla.org/ko/docs/Web/JavaScript/New_in_JavaScript)을 보세요.

ECMA-262 표준은 또한 IOS-16262로서 [ISO](http://www.iso.ch/)(국제 표준화 기구)에 의해 승인되었습니다. [Ecma International website](http://www.ecma-international.org/publications/standards/Ecma-262.htm)에서 그 명세를 찾을 수 있습니다. ECMAScript 명세는 [World Wide Web Consortium (W3C)](http://www.w3.org/) 나  [WHATWG (Web Hypertext Application Technology Working Group)](https://whatwg.org/)에 의해 표준화된 Document Object Model (DOM)을 설명하지 않습니다. DOM은 여러분의 스크립트에 HTML 문서 객체를 드러내는 방법을 정의합니다. JavaScript로 프로그래밍을 할 때 사용되는 여러 기술들에 대한 정보를 얻으 시려면, [JavaScript technologies overview](https://developer.mozilla.org/ko/docs/Web/JavaScript/JavaScript_technologies_overview) 를 참고하세요.

## JavaScript 문서 vs ECMAScript 명세

ECMAScript 명세는 ECMAScript 구현을 위한 요구사항의 집합입니다.
여러분이 여러분의 ECMAScript 구현이나 엔진(가령 Firefox의 SpiderMondey, 또는 Chrome의 v8)에서 표준을 따르는 언어의 기능을 구현하길 원할 때 유용합니다.

ECMAScript 문서는 스크립트 프로그래머를 돕기 위함이 아닙니다; 스크립트 작성을 위한 정보는 JavaScript 문서를 사용하세요.

ECMAScript 명세는 JavaScript 프로그래머에게 익숙하지 않을 수 있는 용어와 문법을 사용합니다.
언어의 기술이 ECMAScript 에서 다를 수 있지만, 언어 그 자체는 같습니다. JavaScript는 ECMAScript 명세에 서술된 모든 기능을 지원합니다.

JavaScript 문서는 JavaScript 프로그래머에게 적합한 언어의 측면을 설명합니다.

---

[JavaScript 문법과 타입, MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Values,_variables,_and_literals) 내용을 읽고 수업에 임해봅시다.

## 기본

JavaScript는 Java로부터 구문 대부분을 빌려온 것 뿐만 아니라 Awk, Perl 및 Python의 영향도 받았습니다.

JavaScript는 **대소문자를 구별**하며 **Unicode 문자셋을 이용**합니다.

JavaScript에서는 **명령**을 **문(statement)**이라고 부르며, **세미콜론(;)으로 분리**됩니다. 스페이스, 탭, 줄바꿈 문자를 공백이라고 합니다. JavaScript의 스크립트 소스는 왼쪽에서 오른쪽으로 탐색되어 토큰, 제어 문자, 줄바꿈 문자, 주석이나 공백인 입력 요소의 열(sequence)로 바뀝니다. ECMAScript에서도 특정 키워드와 리터럴을 정의하고 문을 끝내는 세미콜론 자동 삽입 규칙([ASI](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion))이 있습니다. 하지만, **항상 세미콜론을 추가해 문을 끝내기를 권합니다.** 왜냐하면 그러면 부작용을 막습니다. 더 자세한 사항은, JavaScript의 [어휘 문법(lexical grammar)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Lexical_grammar)에 관한 레퍼런스를 참고하세요.

## 주석

주석(Comments)의 구문은 C++ 및 다른 많은 언어와 똑같습니다.

```js
// 한 줄 주석

/* 이건 더 긴,
   여러 줄 주석입니다.
 */

/* 그러나, /* 중첩된 주석은 쓸 수 없습니다 */ SyntaxError */
```

## 선언

JavaScript에서 선언은 3가지 방법이 있습니다.

`var` 변수를 선언. 추가로 동시에 값을 초기화.

---

## 온라인 레퍼런스

- [JavaScript 안내서, MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide)