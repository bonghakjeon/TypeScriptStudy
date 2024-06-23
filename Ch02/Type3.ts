// [타입스크립트] 스터디
// 2강 기본 타입 - 타입스크립트 강좌
// 유튜브 참고 URL - https://youtu.be/70w82P-KiVM?si=jGVtGePNUM0HOmw1

// 튜플 (Tuple)
// 배열의 첫번째 요소는 string, 두번째 요소는 number 할당 
let b:[string, number];

b = ['z', 1];  // 가능
// b = [1, 'z'];  // 불가능 

// 메서드 toLowerCase() - 영어 (대문자 -> 소문자) 변환
b[0].toLowerCase();   // 가능
// b[1].toLowerCase();   // 불가능

console.log(b);