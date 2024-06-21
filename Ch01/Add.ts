// [타입스크립트] 스터디
// 1강 타입스크립트를 쓰는 이유를 알아보자 - 타입스크립트 강좌
// 유튜브 참고 URL - https://youtu.be/5oGAkQsGWkc?si=dUIu2sQlLG0rt5pX

// 타입스크립트 - 정적 타입 언어 

// TODO : 오류 메시지 "error TS7006: Parameter 'person' implicitly has an 'any' type." 해결하기 위해 함수 "greeter"에 greeter<P = any>(person : P) 추가 (2024.06.21 jbh)
// TODO : 오류 메시지 "error TS7006: Parameter 'person' implicitly has an 'any' type." 해결하기 위해 함수 "greeter"에 greeter(person : any) 추가 (2024.06.21 jbh)
// 참고 URL - https://velog.io/@edie_ko/React-TypeScript-JavaScript%EC%97%90%EC%84%9C-TypeScript%EB%A1%9C-%EB%B3%80%ED%99%98-%EC%97%90%EB%9F%AC-%EC%84%A0%EB%AC%BC-%EC%84%B8%ED%8A%B8
// 참고 2 URL - https://stackoverflow.com/questions/43064221/typescript-ts7006-parameter-xxx-implicitly-has-an-any-type

function add(num1 : any, num2 : any) {
    console.log(num1 + num2);
}

add();
add(1);
add(1, 2);
add(3, 4, 5);
add("hello", "world");