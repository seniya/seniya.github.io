---
layout: post
title: 33 JavaScript Concepts - 02.원시 자료형(Primitive Data type)
subtitle: 모든 자바스크립트 개발자가 알아야 하는 33가지 개념 - 02.원시 자료형(Primitive Data type)
tags: [javascript, ECMAScript, ECMA스크립트, 33-js-concepts, primitive]
image: /img/posts/2019-02-21-모든 자바스크립트 개발자가 알아야 하는 33가지 개념.jpg
comments: true
---

### 기본 타입 또는 원시 타입 (Primitive values)
by [MDN Web Docs](https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures)

>오브젝트를 제외한 모든 값은 변경 불가능한 값 (immutable value) 이다. 예를 들자면, 특히 C 언어와는 다르게도, 문자열은 불변값 (immutable) 이다. 이런 값을 "primitive values" 라고 일컫는다.
- Primitive Data Type 은 값이 저장된 스택(Stack )메모리 영역에 직접적으로 접근한다. (Pass by Value)
- Object Data type 은 변수의 값이 저장된 힙(Heap) 메모리 영역의 주소값을 저장한다. (Pass by Reference)


<br />  

### JavaScript 전체 자료형 #1
<h1 align="center">
  <img src="https://seniya.github.io/img/posts/2019-02-26-33-js-concepts-02-primitive-data-type.PNG" alt="JavaScript Data type">
</h1>

<br />  

### JavaScript 전체 자료형 #2  

CMAScript 2015 (6th Edition) 기준  7개의 자료형 정의

-  원시 타입 (Primitive values)
   - `String`
   - `Number`
   - `Boolean`
   - `Null`
   - `Undefined`
   - `Symbol`
- 객체 타입 (Object values)
  - `Object`  

  <br />   


### 원시 타입 (Primitive values) 상세

- **String**  
: 텍스트 데이터를 나타내는데 사용. 16비트 부호없는 정수 값 요소들의 집합.  
: 배열처럼 인덱스를 통해 접근 가능한 유사 배열 특징.(read only)
```javascript
let str = "Primitive";    // 큰 따옴표
let str = 'values';       // 작은 따옴표
let str = `Javascript`;   // 백틱(ES6 템플릿 리터럴)
```
