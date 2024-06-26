// 타입스크립트 진짜 쉽게 설명해줌 | 이거보고도 이해 안되면 집가라
// 유튜브 참고 URL - https://youtu.be/GHHUjITelsA?si=m_Ej9T0GISPAkDTB

// 주의사항 - 터미널(Git Bash) 명령어 "node index.ts" 입력 및 엔터시 오류 메시지 "Unexpected token ':'" 출력 
// 오류 출력 사유 : 명령어 중 "node"의 경우 자바스크립트만 이해하고 타입스크립트는 이해 못함.
// 오류 해결 방법 : 타입스크립트 코드를 실행해 줄 수 있는 명렁어 "tsc index.ts"로 돌려야 함.
//                 명령어 "tsc index.ts" 실행시 자바스크립트 소스파일 "index.js" 생성
// 자바스크립트 소스파일 "index.js"이 생기는 이유는 타입스크립트 코드는 브라우저가 이해를 못하고 오직 자바스크립트만 이해하게 설계되었기 때문이다.

// tsconfig.json 파일 이용해서 컴파일 할 때 사용하는 명령어 단축키 "Cmd(또는 Ctrl) + Shift + B"

// Command 화면에서 C드라이브 -> D드라이브 이동 명령어 "D:" + 엔터키 입력
// 참고 URL - https://jin2rang.tistory.com/entry/cmd-D%EB%93%9C%EB%9D%BC%EC%9D%B4%EB%B8%8C-%EC%9D%B4%EB%8F%99

// TypeScript 전용 데이터 타입 
// number 
// string 
// boolean
// null
// undefined
// any

let a:number = 3 
// a = "asdfasdf" - 오류 
a = 4
console.log(a)

let b:string = "love you"
// b = true - 오류 
b = "true"
console.log(b)

// any - 자바스크립트와 비슷하게 어떤 데이터 타입의 값이 할당되도 오류 안남. 
let c:any = 4
c = "asdfasdf"
console.log(c)

// number 또는 string 데이터 타입의 값만 할당될 수 있음.
let d:number | string = "asdfasdf"
d = 3
// d = null - 오류 

// string 배열 
let e:string[] = ['apple', 'mongo']
// e.push(3) - 오류

// number 배열 
let f:number[] = [1, 2]
// f.push('test') - 오류

function addNumber(a:number, b:number):number {
    return a+b
}

console.log(addNumber(3, 7))