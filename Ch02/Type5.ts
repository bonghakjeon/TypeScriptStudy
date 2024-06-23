// [타입스크립트] 스터디
// 2강 기본 타입 - 타입스크립트 강좌
// 유튜브 참고 URL - https://youtu.be/70w82P-KiVM?si=jGVtGePNUM0HOmw1

// enum (비슷한 값들끼리 묶는 열거형 구조체 타입)
enum Os {
    Window = 3,
    Ios = 10, 
    Android
}

console.log(Os[10]);     // "Ios" 출력 
console.log(Os['Ios'])   // 10 출력 

enum Os2 {
    Window = 'win',
    Ios = 'ios',
    Android = 'and'
}

// 위의 enum Os2와 같은 기능 
// const Os2 = {
//     Window : 'win',
//     Ios : 'ios',
//     Android : 'and'
// }

let myOs:Os2;

myOs = Os2.Window;



