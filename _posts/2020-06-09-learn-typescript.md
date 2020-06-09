---
layout: post
title: TypeScript. TypeScript 시작하기 - 01
subtitle: typescript 시작하기
gh-repo: seniya/study_well/tree/master/ready_01_typescript
gh-badge: [star, fork, follow]
tags: [TypeScript]
categories: javascript
comments: true
---

### 시작 전 준비물

- node 환경 및 인터넷 환경
- 에디터 ex) <span class="">VSCode</span> - Visual Studio Code
- Javasciprt 선행지식
- node 및 npm 선행지식

<br />

# 1. 환경 준비

먼저 사용하고 하는 디렉토리로 이동하여 다음과 같이 노드패키지메지저를 초기화 합니다.

<br />

```sh
# [shell]

> mkdir 01_typescript  # 사용하고자 하는 디렉토리
> cd 01_typescript # 이동

# 해당 공간에 노드패키지매니저 초기화 (package.json 생성)
# 특별한 설정 없이 엔터 치면서 진행 완료한 모습
> npm init

# 타입스크립트 패키지 전역 설치
> npm install -g typescript

# 해당 공간에 타입스크팁트 초기화 (tsconfig.json 생성)
> tsc -init

# 버전 확인 (필자 tsc version 3.9.5 && node v12.17.0)
> tsc -v

// main.ts 파일 생성 (또는 vscode 에서 해당 디렉토리 및에 만듦)
> touch main.ts
```

<br />

```js
// [source] main.js

let message1: boolean;
message1 = true;
console.log('console1 :>> ', message1, typeof message1);
```

<br />

```sh
# [shell]

# shell 에서 tsc 실행 후 main.js 파일 생성 확인
> tsc main.ts

# main.js 실행
> node main.js
console1 :>>  true boolean
```

**첫 타입스크립트 작성을 축하합니다 ✔**

<br />

# 2. Typescript 란

- 이미 많은 설명과 글들이 존재하기에 몇몇 링크로 대신합니다.

[공식사이트](https://www.typescriptlang.org/index.html) 발췌

> TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Any browser. Any host. Any OS. Open source.

[TypeScript #1 타입스크립트란 무엇인가?](https://medium.com/@wonjong_oh/typescript-1-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80-f4b02f54009c)  
[TypeScript의 소개와 개발 환경 구축](https://poiemaweb.com/typescript-introduction)  
[TypeScript-Handbook 한글 문서](https://typescript-kr.github.io/)  
[TypeScript - 나무위키](https://namu.wiki/w/TypeScript)

<br />

# 3. Typescript Basic

- 자주 사용되는 [자바스크립트의 자료형](https://seniya.github.io/blog/2019/02/26/33-js-concepts-02-primitive-data-type)을 통하여 기본 사용법을 안내합니다.
