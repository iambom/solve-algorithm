// 문자열 내맘대로 정렬하기
// 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

function solution(strings, n) {
    strings.sort((a, b) => {
        // true면 1을 반환, false면 0을 반환하기 때문에 앞조건이 true면 1을 반환하고 뒤 조건이 true면 -1을 반환한다. 
        // 따라서 맞으면 1, 틀리면 -1을 반환 
      if(a[n] === b[n]) {
        return (a > b) - (a < b)
      } else {
        return (a[n] > b[n]) - (a[n] < b[n])
      }
    })
    return strings
 }

 // 다른 사람 풀이
 function solution(strings, n) {
    strings.sort(function(a,b){
        if(a[n] > b[n]) return 1;
        if(b[n] > a[n]) return -1;

        if(a > b) return 1;
        if(b > a) return -1;

        return 0;
    });
    return strings;
}

// sort()
// 오름차순 정렬 순서
// 숫자 > 알파벳(대문자) > 알파벳(소문자)
['a', 'c', 'b'].sort();   // ['a', 'b', 'c']
[1, 2, 10, 20].sort();    // [1, 10, 2, 20]
['A', 'B', 'a', 'b', '1', '2'].sort()   // ['1', '2', 'A', 'b', 'a', 'b']

// return 1 : 정렬된 상태
// return -1 : 정렬 바꿈
// return 0 : 정렬 안 바꿈
['A', 'B'].sort((a, b) => { // a = 'B', b = 'A'
  if(a > b) { // B > A
    return 1
  }
  if(a < b) { // A > B
    return -1
  }
})
