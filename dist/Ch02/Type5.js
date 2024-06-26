// [타입스크립트] 스터디
// 2강 기본 타입 - 타입스크립트 강좌
// 유튜브 참고 URL - https://youtu.be/70w82P-KiVM?si=jGVtGePNUM0HOmw1
// enum (비슷한 값들끼리 묶는 열거형 구조체 타입)
var Os;
(function (Os) {
    Os[Os["Window"] = 3] = "Window";
    Os[Os["Ios"] = 10] = "Ios";
    Os[Os["Android"] = 11] = "Android";
})(Os || (Os = {}));
console.log(Os[10]); // "Ios" 출력 
console.log(Os['Ios']); // 10 출력 
var Os2;
(function (Os2) {
    Os2["Window"] = "win";
    Os2["Ios"] = "ios";
    Os2["Android"] = "and";
})(Os2 || (Os2 = {}));
// 위의 enum Os2와 같은 기능 
// const Os2 = {
//     Window : 'win',
//     Ios : 'ios',
//     Android : 'and'
// }
let myOs;
myOs = Os2.Window;
//# sourceMappingURL=Type5.js.map