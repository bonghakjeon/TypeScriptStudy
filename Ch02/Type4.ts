// [타입스크립트] 스터디
// 2강 기본 타입 - 타입스크립트 강좌
// 유튜브 참고 URL - https://youtu.be/70w82P-KiVM?si=jGVtGePNUM0HOmw1

// void - 반환 X 메서드 형식
function sayHello():void {
    console.log('hello');
}

// never - 항상 에러 반환
function showError():never {
    throw new Error();
}

// never - 무한 루프 실행
function infLoop():never {
    while(true) {
        // do something...
    }
}
