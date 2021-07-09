// 완주하지 못한 선수
// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

function solution(participant, completion) {
    var answer = '';
    
    participant.sort();
    completion.sort();
    
    for(let i=0; i < participant.length; i++) {
        if(participant[i] !== completion[i]) {
            answer = participant[i]
            return answer;
        }
    }
}

// sort()로 배열 정렬 후 두 배열을 비교하여 participant에만 있는 요소를 걸러 준다.