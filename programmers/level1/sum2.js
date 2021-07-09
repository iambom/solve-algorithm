// 두 개 뽑아서 더하기
// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

function solution(numbers) {
    var answer = [];
    let sum = 0;
    for(let i = 0; i < numbers.length - 1; i++) {
        for(let j = i+1; j < numbers.length; j++) {
            sum = numbers[i] + numbers[j];
            if(!answer.includes(sum)) {
                answer.push(sum);
            }
        }
    }
    answer.sort((a,b) => a-b);
    return answer;
}

// 배열 중복 제거 다른 풀이
// if(answer.indexOf(sum) == -1) // indexOf는 요소가 없으면 -1 반환
