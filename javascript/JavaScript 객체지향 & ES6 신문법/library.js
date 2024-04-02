// 참고 : export 키워드는 변수/함수 선언 왼쪽에 써도 됩니다.
let a = 10;
let b = 20;
let c = 30;

// export default 내보낼거
// export default a;

// 여러개를 내보내는 export 문법
// export {내보낼것들}
export {a, b};
export default c;