let fn1 = function() {
  console.log('fn1 실행');
  fn2();
}

let fn2 = function() {
  console.log('fn2 실행');
}

fn1();