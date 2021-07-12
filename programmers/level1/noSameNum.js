// 같은 숫자는 싫어
// 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

function solution(arr)
{
    let answer = [];

    for(let i=0; i < arr.length; i++) {
      if(arr[i-1] !== arr[i]) {
        answer.push(arr[i])
      }  
    }
    
    return answer;
}

// 다른 사람 풀이

function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
}
