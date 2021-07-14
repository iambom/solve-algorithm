// 하샤드의 수

function solution(num) {
    let sum = 0;
    const array = String(num).split('')
    
    for(let i = 0; i < array.length; i++) {
      sum += parseInt(array[i]);
    }
    
    if(num % sum === 0) {
      return true;
    }else {
      return false;
    }
  }
  