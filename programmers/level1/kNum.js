// k번째 수 

function solution(array, commands) {
    const answer = [];
    let i = 0;
    let j = 0; 
    let k = 0;
    
    for(let a = 0; a < commands.length; a++) {
      i = commands[a][0] - 1;
      j = commands[a][1];
      k = commands[a][2] - 1;
      
      answer.push(array.slice(i, j).sort((b, c) => b- c)[k]);
    }
    return answer;
  }

  // 다른 사람 풀이
  // 구조 분해 할당!
  function solution(array, commands) {
    return commands.map(command => {
        const [sPosition, ePosition, position] = command
        const newArray = array
            .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
            .sort((a,b) => a - b)    

        return newArray[position - 1]
    })
}

// 배열 자르기 => slice(begin, end)
// begin : 잘라낼 배열의 시작 index
// end : 잘라낼 배열의 종료 index