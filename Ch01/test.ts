// TypeScript 다운로드 및 튜토리얼 사이트
// 참고 URL - https://www.typescriptlang.org/download/
// 참고 2 URL - https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html

// [셀프스터디] TypeScript 개발환경 설정하기 (Win10, VSCode)
// 유튜브 참고 URL - https://youtu.be/y9IwilwyNsA?si=4G0R7XfruQ3lOIDZ

// PowerShell 프로그램 관리자 권한 실행 및 TypeScript 설치 및 버전 확인시 
// 출력되는 오류 메시지 해결 방법
// "tsc : 이 시스템에서 스크립트를 실행할 수 없으므로 c:\users\bhjeon\appdata\roaming\npm\tsc.ps1 파일을 로드할 수 없습니다 . 자세한 내용은 about_execution_policies(https://go.microsoft.com/fwlink/?linkid=135170)를 참조하십시오."
// 참고 URL - https://mag1c.tistory.com/458

// [타입스크립트] 스터디
// 1강 타입스크립트를 쓰는 이유를 알아보자 - 타입스크립트 강좌
// 유튜브 참고 URL - https://youtu.be/5oGAkQsGWkc?si=dUIu2sQlLG0rt5pX

// 타입스크립트 - 정적 타입 언어 

// TODO : 오류 메시지 "error TS7006: Parameter 'person' implicitly has an 'any' type." 해결하기 위해 함수 "greeter"에 greeter<P = any>(person : P) 추가 (2024.06.21 jbh)
// TODO : 오류 메시지 "error TS7006: Parameter 'person' implicitly has an 'any' type." 해결하기 위해 함수 "greeter"에 greeter(person : any) 추가 (2024.06.21 jbh)
// 참고 URL - https://velog.io/@edie_ko/React-TypeScript-JavaScript%EC%97%90%EC%84%9C-TypeScript%EB%A1%9C-%EB%B3%80%ED%99%98-%EC%97%90%EB%9F%AC-%EC%84%A0%EB%AC%BC-%EC%84%B8%ED%8A%B8
// 참고 2 URL - https://stackoverflow.com/questions/43064221/typescript-ts7006-parameter-xxx-implicitly-has-an-any-type

// function greeter<P = any>(person : P) {
function greeter(person : any) {
    return "Hello, " + person;
}
   
let user = "Minjae Jeon";
   
const result = greeter(user);

console.log(result);