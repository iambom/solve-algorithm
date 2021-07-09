// 서울에서 김서방 찾기
// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

function solution(seoul) {
    var answer = '';
    for(let i = 0; i < seoul.length; i++) {
        if(seoul[i] === 'Kim') {
            answer = i;
        }
    }
    return `김서방은 ${answer}에 있다`;
}

// 다른 사람 풀이
function findKim(seoul){
    var idx = seoul.indexOf('Kim');
    return "김서방은 " + idx + "에 있다";
}

function findKim(seoul) {
    return "김서방은 " + seoul.indexOf('Kim') + "에 있다";
}