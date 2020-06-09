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

### 준비물

- node 환경 및 인터넷 환경
- 에디터 ex) <span class="">VSCode</span> - Visual Studio Code
- Javasciprt 선행지식
- node 및 npm 선행지식

### 1. 환경 준비

먼저 사용하고 하는 디렉토리로 이동하여 다음과 같이 노드패키지메지저를 초기화 합니다.

<br />
shell)

```sh
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
source) **main.js**

```js
let message1: boolean;
message1 = true;
console.log('console1 :>> ', message1, typeof message1);
```

<br />
shell)

```sh
# shell 에서 tsc 실행 후 main.js 파일 생성 확인
> tsc main.ts

# main.js 실행
> node main.js
console1 :>>  true boolean
```

**첫 타입스크립트 작성을 축하합니다 ✔**
