// 정수 내림차순 정렬

function solution(n) {
    let answer = 0;
    const array = n.toString().split('');
  
    array.sort((a,b) => {
      return b - a
    })
    answer = parseInt(array.join(''));
    return answer;
}

// 다른 사람 풀이
// reverse() 사용
// [1,2,3].reverse(); // [3,2,1]
function solution(n) {
    const newN = n + "";
    const newArr = newN
      .split("")
      .sort()
      .reverse()
      .join("");
  
    return +newArr;
}