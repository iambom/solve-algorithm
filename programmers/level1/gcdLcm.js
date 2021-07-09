// 최대공약수와 최소공배수
// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

function solution(n, m) {
    var answer = [];
    let min = Math.min(n, m);
    let max = Math.max(n, m);
    answer[0] = greatestCommonDivisor(min, max);
    answer[1] = leastCommonMultipe(min, max);
    return answer;
    
    function greatestCommonDivisor(min, max) {
        return (min % max) === 0 ? max : greatestCommonDivisor(max, min % max)
    }
    
    function leastCommonMultipe(min, max) {
        return min * max / greatestCommonDivisor(min, max)
    }
}

// 최소공배수는 두 수의 공통된 배수(공배수) 중 가장 작은 수로 
// minNum * maxNum / 최대공약수
// 최대공약수는 유클리드 호제법을 이용한다.
/*
    유클리드 호제법
    두 수를 나눠서 나머지가 0이면 maxNum가 최대공약수이고, 나머지가 생긴다면 maxNum을 minNum % maxNum으로 다시 나눈다.
*/