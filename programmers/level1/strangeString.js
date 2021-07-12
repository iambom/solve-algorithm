// 이상한 문자 만들기
// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

function solution(s) {
    let index = 0; // 공백 있을 때마다 짝홀 인덱스 구분을 위한 변수
    let answer = '';

    for(let i=0; i < s.length; i++) {
      if(s[i] === " ") {
        answer += " ";
        index = 0;
      } else {
        if(index % 2 === 0) {
          answer += s[i].toUpperCase();
        } else{
          answer += s[i].toLowerCase();
        }
        index++;
      }
    }
  return answer;
}

// 다른 사람 풀이
function solution(s) {
    return s.split(' ').map(word => {
        let result = '';
        for(let i = 0; i < word.length; i++) {
            if(i%2) {
                result += word[i].toLowerCase();
            } else {
                result += word[i].toUpperCase();
            }
        }
        return result;
    }).join(' ');
}