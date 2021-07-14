// 콜라츠의 추측

function solution(num) {
    let index = 0;
    
  while(num !== 1) {
    if(index > 500) {
      index = -1; 
      break;
    }
    
    if(num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }
    index++;
  }
  return index;
}

// 다른 사람 풀이
function collatz(num) {
    var answer = 0;
    while(num !=1 && answer !=500){
        num%2==0 ? num = num/2 : num = num*3 +1;
    answer++;
  }
    return num == 1 ? answer : -1;
}