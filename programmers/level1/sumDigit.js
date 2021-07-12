// 자릿수 더하기

function solution(n) {
    const value = String(n);
    let answer = 0;
    for(let i=0; i < value.length; i++) {
      answer += value[i] / 1
    }
    return answer
  }

  // 다른 사람 풀이
  function solution(n) {
    var arr = n.toString().split('');
    var sum = 0;
    arr.forEach(element => {
        sum += parseInt(element);
    });
    return sum;
}