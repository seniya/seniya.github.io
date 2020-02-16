function change(pri) {
  pri = 10
}
const p = 1
change(p)
console.log('p : ', p) // p = 1




let a = { val: 10 };
let b = { val: 10 };  
console.log(a, b);  
// > Object {val: 10}
// > Object {val: 10}
console.log(a === b); // 같은 다른 참조값(주소)를 바라보고 있으므로 결과는 거짓.
// > false