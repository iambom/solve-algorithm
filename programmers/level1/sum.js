// 두 정수 사이의 합
//두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요. 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

function solution(a, b) {
    var answer = 0;
    
    if(a === b) {
        answer = a
    } else{
        let min = Math.min(a,b);
        let max = Math.max(a,b);
        
        for(let i = min; i < max + 1; i++ ) {
            answer += i;
        }
    }
    return answer;
}