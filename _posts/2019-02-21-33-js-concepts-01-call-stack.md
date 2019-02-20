---
layout: post
title: 모든 자바스크립트 개발자가 알아야 하는 33가지 개념 - 01.호출 스택
subtitle: Javascript 호출스택(call stack)
tags: [javascript, ECMAScript, ECMA스크립트, 33-js-concepts, call stack]
image: /img/posts/2019-02-21-모든 자바스크립트 개발자가 알아야 하는 33가지 개념.jpg
comments: true
---

### 호출 스택이란
by [MDN Web Docs](https://developer.mozilla.org/ko/docs/Glossary/Call_stack)

>호출 스택은 여러 함수들(functions)을 호출하는 스크립트에서 해당 위치를 추적하는 인터프리터 (웹 브라우저의 자바스크립트 인터프리터같은)를 위한 메커니즘입니다. 현재 어떤 함수가 동작하고있는 지, 그 함수 내에서 어떤 함수가 동작하는 지, 다음에 어떤 함수가 호출되어야하는 지 등을 제어합니다.


### 예제
{% highlight javascript linenos %}
let fn1 = function() {
  console.log('fn1 실행');
  fn2();
}

let fn2 = function() {
  console.log('fn2 실행');
}

fn1();
{% endhighlight %}

